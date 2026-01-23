import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/LoginPage.css';

const LoginPage = ({ isRegister = false }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { login, register, error, setError } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(isRegister || searchParams.get('mode') === 'register');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (isRegisterMode) {
        if (formData.password !== formData.confirmPassword) {
          setError('Senhas não coincidem');
          setIsLoading(false);
          return;
        }
        const success = await register(formData.name, formData.email, formData.password);
        if (success) navigate('/dashboard');
      } else {
        const success = await login(formData.email, formData.password);
        if (success) navigate('/dashboard');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">🏗️ ARCHITECT</h1>
        <p className="login-subtitle">Sistema de Evolução Pessoal</p>

        <form onSubmit={handleSubmit}>
          {isRegisterMode && (
            <div className="form-group">
              <label htmlFor="name">Nome Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Seu nome"
                required
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Sua senha"
              required
            />
          </div>

          {isRegisterMode && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar Senha</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirme sua senha"
                required
              />
            </div>
          )}

          {error && <div className="error-message">{error}</div>}

          <button
            type="submit"
            className="login-button"
            disabled={isLoading}
          >
            {isLoading
              ? 'Carregando...'
              : isRegisterMode
              ? 'Registrar'
              : 'Entrar'}
          </button>
        </form>

        <div className="login-footer">
          {isRegisterMode ? (
            <>
              <p>Já tem uma conta?</p>
              <button
                onClick={() => setIsRegisterMode(false)}
                className="toggle-button"
              >
                Faça login aqui
              </button>
            </>
          ) : (
            <>
              <p>Não tem uma conta?</p>
              <button
                onClick={() => setIsRegisterMode(true)}
                className="toggle-button"
              >
                Registre-se aqui
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
