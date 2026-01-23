import api from '../config/api';

// Serviço de Atividades
export const activityService = {
  create: async (data) => {
    const response = await api.post('/api/v1/activities', data);
    return response.data;
  },

  list: async (skip = 0, limit = 10) => {
    const response = await api.get('/api/v1/activities', {
      params: { skip, limit }
    });
    return response.data;
  },

  get: async (id) => {
    const response = await api.get(`/api/v1/activities/${id}`);
    return response.data;
  },

  update: async (id, data) => {
    const response = await api.put(`/api/v1/activities/${id}`, data);
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/api/v1/activities/${id}`);
    return response.data;
  }
};

// Serviço de Metas
export const goalService = {
  create: async (data) => {
    const response = await api.post('/api/v1/goals', data);
    return response.data;
  },

  list: async (skip = 0, limit = 10) => {
    const response = await api.get('/api/v1/goals', {
      params: { skip, limit }
    });
    return response.data;
  },

  get: async (id) => {
    const response = await api.get(`/api/v1/goals/${id}`);
    return response.data;
  },

  update: async (id, data) => {
    const response = await api.put(`/api/v1/goals/${id}`, data);
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/api/v1/goals/${id}`);
    return response.data;
  }
};

// Serviço de Usuários
export const userService = {
  getProfile: async () => {
    const response = await api.get('/api/v1/users/me');
    return response.data;
  },

  updateProfile: async (data) => {
    const response = await api.put('/api/v1/users/me', data);
    return response.data;
  },

  listUsers: async (skip = 0, limit = 10) => {
    const response = await api.get('/api/v1/users', {
      params: { skip, limit }
    });
    return response.data;
  },

  getUser: async (id) => {
    const response = await api.get(`/api/v1/users/${id}`);
    return response.data;
  }
};
