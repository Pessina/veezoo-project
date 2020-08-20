import axios from 'axios';
import { errorAlert, successAlert } from '../utils/utils';

const url = 'https://my-json-server.typicode.com/open-veezoo/editor';

export const getFileTree = async () => {
  try {
    return await axios.get(`${url}/filetree`);
  } catch (e) {
    errorAlert(e.message);
    return false;
  }
};

export const getFile = async (id) => {
  try {
    return await axios.get(`${url}/files/${id}`);
  } catch (e) {
    errorAlert(e.message);
    return false;
  }
};

export const removeFileDb = async (id) => {
  try {
    await axios.delete(`${url}/files/${id}`);
    successAlert('File deleted');
    return true;
  } catch (e) {
    errorAlert(e.message);
    return false;
  }
};

export const updateFileDb = async (file) => {
  try {
    await axios.put(`${url}/files/${file.id}`, {
      params: {
        ...file,
      },
    });
    successAlert('File saved');
    return true;
  } catch (e) {
    errorAlert(e.message);
    return false;
  }
};
