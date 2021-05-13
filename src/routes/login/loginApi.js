import { appAxios } from 'services/apiService';
import { commonEndpoints } from 'services/endpointsService';

export const api = {
  login: {
    post: async (data) => {
      return appAxios.post('/login', { data });
    },
  },
  ...commonEndpoints,
};
