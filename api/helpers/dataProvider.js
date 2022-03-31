import { axiosRemote as axios } from '@/utils/axios';
import buildQuery from '@/utils/buildQuery';
import { handleError, handleSuccess } from './handler';
import { apiBaseUrl } from './host';

export const getMany = async (resource, options) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiBaseUrl}/${resource}${buildQuery(options)}`)
      .then(handleSuccess(resolve))
      .catch(handleError(reject));
  });
};

export const get = async (resource) => {
  return new Promise((resolve, reject) => {
    axios.get(`${apiBaseUrl}/${resource}`).then(handleSuccess(resolve)).catch(handleError(reject));
  });
};

export const getOne = async (resource, id) => {
  return new Promise((resolve, reject) => {
    axios.get(`${apiBaseUrl}/${resource}/${id}`).then(handleSuccess(resolve)).catch(handleError(reject));
  });
};

export const createOne = async (resource, values) => {
  return new Promise((resolve, reject) => {
    axios.post(`${apiBaseUrl}/${resource}`, values).then(handleSuccess(resolve)).catch(handleError(reject));
  });
};

export const updateOne = async (resource, values) => {
  return new Promise((resolve, reject) => {
    axios.put(`${apiBaseUrl}/${resource}/${values.id}`, values).then(handleSuccess(resolve)).catch(handleError(reject));
  });
};

export const deleteOne = async (resource, id) => {
  return new Promise((resolve, reject) => {
    axios.delete(`${apiBaseUrl}/${resource}/${id}`).then(handleSuccess(resolve)).catch(handleError(reject));
  });
};

export const post = async (resource, values) => {
  return new Promise((resolve, reject) => {
    axios.post(`${apiBaseUrl}/${resource}`, values).then(handleSuccess(resolve)).catch(handleError(reject));
  });
};
