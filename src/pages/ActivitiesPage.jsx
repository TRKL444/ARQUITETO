import React, { useState, useEffect } from 'react';
import { activityService } from '../services/api.service';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../styles/ActivitiesPage.css';

const ActivitiesPage = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'work'
  });

  useEffect(() => {
    loadActivities();
  }, []);

  const loadActivities = async () => {
    setLoading(true);
    try {
      // TODO: Implementar carregamento
      setActivities([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: Implementar criação
      setFormData({ title: '', description: '', category: 'work' });
      setShowForm(false);
    } catch (error) {
      console.error('Erro ao criar atividade:', error);
    }
  };

  return (
    <div className="activities-container">
      <Header />
      <div className="activities-main">
        <Sidebar />
        <main className="activities-content">
          <div className="activities-header">
            <h1>📋 Atividades</h1>
            <button
              className="btn-primary"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? 'Cancelar' : '+ Nova Atividade'}
            </button>
          </div>

          {showForm && (
            <form className="activity-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Título da atividade"
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
              <div className="form-group">
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                >
                  <option value="work">Trabalho</option>
                  <option value="health">Saúde</option>
                  <option value="learning">Aprendizado</option>
                  <option value="personal">Pessoal</option>
                </select>
              </div>
              <button type="submit" className="btn-primary">
                Criar Atividade
              </button>
            </form>
          )}

          <div className="activities-list">
            {loading ? (
              <p>Carregando...</p>
            ) : activities.length === 0 ? (
              <div className="empty-state">
                <p>Nenhuma atividade registrada ainda</p>
              </div>
            ) : (
              activities.map((activity) => (
                <div key={activity.id} className="activity-card">
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                  <span className={`category category-${activity.category}`}>
                    {activity.category}
                  </span>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ActivitiesPage;
