import api from './api-helper';

export const readAllServices = async () => {
  const resp = await api.get('/services');
  return resp.data;
}
export const readOneService = async (id) => {
  const resp = await api.get(`/services/${id}`);
  return resp.data;
}

