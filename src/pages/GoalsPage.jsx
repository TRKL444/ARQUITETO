import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../styles/GoalsPage.css';

const GoalsPage = () => {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    deadline: '',
    priority: 'medium'
  });

  useEffect(() => {
    loadGoals();
  }, []);

  const loadGoals = async () => {
    setLoading(true);
    try {
      // TODO: Implementar carregamento
      setGoals([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: Implementar criação
      setFormData({
        title: '',
        description: '',
        deadline: '',
        priority: 'medium'
      });
      setShowForm(false);
    } catch (error) {
      console.error('Erro ao criar meta:', error);
    }
  };

  return (
    <div className="goals-container">
      <Header />
      <div className="goals-main">
        <Sidebar />
        <main className="goals-content">
          <div className="goals-header">
            <h1>🎯 Metas</h1>
            <button
              className="btn-primary"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? 'Cancelar' : '+ Nova Meta'}
            </button>
          </div>

          {showForm && (
            <form className="goal-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Título da meta"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Descrição"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="date"
                    value={formData.deadline}
                    onChange={(e) =>
                      setFormData({ ...formData, deadline: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <select
                    value={formData.priority}
                    onChange={(e) =>
                      setFormData({ ...formData, priority: e.target.value })
                    }
                  >
                    <option value="low">Baixa</option>
                    <option value="medium">Média</option>
                    <option value="high">Alta</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn-primary">
                Criar Meta
              </button>
            </form>
          )}

          <div className="goals-list">
            {loading ? (
              <p>Carregando...</p>
            ) : goals.length === 0 ? (
              <div className="empty-state">
                <p>Nenhuma meta criada ainda</p>
              </div>
            ) : (
              goals.map((goal) => (
                <div key={goal.id} className="goal-card">
                  <h3>{goal.title}</h3>
                  <p>{goal.description}</p>
                  <div className="goal-footer">
                    <span className={`priority priority-${goal.priority}`}>
                      {goal.priority}
                    </span>
                    <span className="deadline">{goal.deadline}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default GoalsPage;
