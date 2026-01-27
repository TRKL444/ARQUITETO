import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Verificar token ao montar
  useEffect(() => {
    // Para testes: simular usuário logado automaticamente
    if (!token) {
      const mockToken = `test_token_${Date.now()}`;
      const mockUser = {
        id: 'test_user',
        name: 'Test User',
        email: 'test@example.com',
        level: 1,
        totalXp: 1250,
        attributes: {
          FOR: 65,
          INT: 85,
          VIT: 70,
          AGI: 60,
          SOR: 75
        }
      };
      localStorage.setItem('token', mockToken);
      localStorage.setItem('user', JSON.stringify(mockUser));
      setToken(mockToken);
      setUser(mockUser);
    } else {
      // Recuperar dados do usuário do localStorage
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (err) {
          console.error('Erro ao recuperar usuário:', err);
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setToken(null);
          setUser(null);
        }
      }
    }
    setLoading(false);
  }, [token]);

  const login = async (email, password) => {
    try {
      setError(null);
      
      // Validação básica
      if (!email || !password) {
        setError('Email e senha são obrigatórios');
        return false;
      }

      // Simular autenticação (em produção, isso seria uma chamada à API)
      const mockToken = `token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const mockUser = {
        id: Math.random().toString(36).substr(2, 9),
        name: email.split('@')[0],
        email: email,
        level: 1,
        totalXp: 0,
        attributes: {
          FOR: 50,
          INT: 50,
          VIT: 50,
          AGI: 50,
          REC: 50
        }
      };

      // Armazenar no localStorage
      localStorage.setItem('token', mockToken);
      localStorage.setItem('user', JSON.stringify(mockUser));
      
      setToken(mockToken);
      setUser(mockUser);
      return true;
    } catch (err) {
      setError(err.message || 'Erro ao fazer login');
      return false;
    }
  };

  const register = async (name, email, password) => {
    try {
      setError(null);
      
      // Validação básica
      if (!name || !email || !password) {
        setError('Todos os campos são obrigatórios');
        return false;
      }

      if (password.length < 6) {
        setError('Senha deve ter pelo menos 6 caracteres');
        return false;
      }

      // Simular registro (em produção, isso seria uma chamada à API)
      const mockToken = `token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const mockUser = {
        id: Math.random().toString(36).substr(2, 9),
        name: name,
        email: email,
        level: 1,
        totalXp: 0,
        attributes: {
          FOR: 50,
          INT: 50,
          VIT: 50,
          AGI: 50,
          REC: 50
        }
      };

      // Armazenar no localStorage
      localStorage.setItem('token', mockToken);
      localStorage.setItem('user', JSON.stringify(mockUser));
      
      setToken(mockToken);
      setUser(mockUser);
      return true;
    } catch (err) {
      setError(err.message || 'Erro ao se registrar');
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  const isAuthenticated = !!user && !!token;

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        error,
        isAuthenticated,
        login,
        register,
        logout,
        setError
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return context;
};
