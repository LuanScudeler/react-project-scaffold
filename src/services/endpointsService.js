import { appAxios } from './apiService';

export const commonEndpoints = {
  logout: {
    post: async () => appAxios.post('/logout'),
  },
};
