import api from './api';
import { handleResponse } from './api';



const handleError = (error: any) => {
  if (error.response) {
    // Сервер вернул статус отличный от 2xx
    console.error('Request failed with status:', error.response.status);
    throw error.response.data; // Возвращаем данные об ошибке
  } else if (error.request) {
    // Запрос был сделан, но ответ не был получен
    console.error('Request made but no response received:', error.request);
    throw 'Request made but no response received';
  } else {
    // Произошла ошибка при настройке запроса
    console.error('Error setting up request:', error.message);
    throw error.message;
  }
};


export const MunkaApi = {
  
  registerEmployer: async (employerData: {
    name: string;
    email: string;
    password: string;
  }): Promise<any> => {
    try {
      const response = await api.post('/employer/registration', employerData);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  authenticateEmployer: async (): Promise<any> => {
    try {
      const response = await api.get('/employer/auth');
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  getAllVacancies: async (): Promise<any> => {
    try {
      const response = await api.get('/vacancies');
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  createVacancy: async (vacancyData: any): Promise<any> => {
    try {
      const response = await api.post('/vacancies', vacancyData);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  editVacancy: async (id: string, vacancyData: any): Promise<any> => {
    try {
      const response = await api.post(`/vacancies/${id}`, vacancyData);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  getSettings: async (): Promise<any> => {
    try {
      const response = await api.get('/settings');
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  updateSettings: async (settingsData: any): Promise<any> => {
    try {
      const response = await api.post('/settings', settingsData);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },
};

export default api;
