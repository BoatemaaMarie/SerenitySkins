import api from './api-helper';

export const readAllAppointments = async () => {
  const resp = await api.get('/appointments');
  return resp.data;
}

export const readOneAppointment = async (id) => {
  const resp = await api.get(`/appointments/${id}`);
  return resp.data;
}

export const postAppointment = async (appointmentData) => {
  const resp = await api.post('/appointments', { appointment: appointmentData });
  return resp.data;
}

export const putAppointment = async (id, appointmentData) => {
  const resp = await api.put(`/appointments/${id}`, { appointment: appointmentData });
  return resp.data;
}

export const destroyAppointment = async (id) => {
  const resp = await api.delete(`/appointments/${id}`);
  return resp;
}

export const addService = async(serviceId, appointmentId) => {
  const resp = await api.put(`/services/${serviceId}/appointments/${appointmentId}`);
  return resp.data;
}
