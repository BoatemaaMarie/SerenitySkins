import api from './api-helper';

export const readAllServices = async () => {
  const resp = await api.get('/services');
  return resp.data;
}