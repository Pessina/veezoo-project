import axios from 'axios';

const url = 'https://my-json-server.typicode.com/open-veezoo/editor';

export const getFileTree = async () => {
  try {
    return await axios.get(`${url}/filetree`);
  } catch (e) {
    alert('Error getting the filetree', e);
    return false;
  }
};

export const getFile = async (id) => {
  try {
    return await axios.get(`${url}/files/${id}`);
  } catch (e) {
    alert('Error getting your file', e);
    return false;
  }
};

export const removeFileDb = async (id) => {
  try {
    await axios.delete(`${url}/files/${id}`);
    return true;
  } catch (e) {
    alert('Error deleting your file', e);
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
    return true;
  } catch (e) {
    alert('Error updating your file', e);
    return false;
  }
};
