import React, { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from '../config/supabase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função que busca os dados de RPG (XP, Atributos) na tabela 'profiles'
  const fetchUserProfile = async (userId, email) => {
    try {
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Erro ao buscar perfil:', error.message);
        return;
      }

      if (profile) {
        // Combina o e-mail da sessão com os dados do banco (XP, Nível, Atributos)
        setUser({ email, ...profile });
      }
    } catch (err) {
      console.error('Erro inesperado ao carregar perfil:', err);
    }
  };

  useEffect(() => {
    const initializeAuth = async () => {
      setLoading(true);
      
      // 1. Verificar se já existe sessão ativa ao abrir o app
      const { data: { session } } = await supabase.auth.getSession();
      
      setSession(session);
      
      if (session?.user) {
        await fetchUserProfile(session.user.id, session.user.email);
      }
      
      setLoading(false);
    };

    initializeAuth();

    // 2. Ouvinte de eventos: Login, Logout, Token Refreshed
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      
      if (session?.user) {
        // Se logou, busca os dados do perfil
        await fetchUserProfile(session.user.id, session.user.email);
      } else {
        // Se deslogou, limpa o estado
        setUser(null);
      }
      
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      setError(null);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      return true;
    } catch (err) {
      setError(err.message === "Invalid login credentials" 
        ? "E-mail ou senha incorretos." 
        : "Erro ao fazer login: " + err.message);
      return false;
    }
  };

  const register = async (name, email, password) => {
    try {
      setError(null);
      
      // Enviamos os dados iniciais no 'options.data'. 
      // O Trigger que criamos no SQL vai pegar isso e criar a linha na tabela 'profiles'.
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            level: 1,
            totalXp: 0,
            attributes: { FOR: 50, INT: 50, VIT: 50, AGI: 50, REC: 50 }
          }
        }
      });

      if (error) throw error;
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user, // Agora contém o objeto completo do banco de dados!
        session,
        loading,
        error,
        isAuthenticated: !!session,
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