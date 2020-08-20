import { removeFileDb, updateFileDb } from '../db/db';

export const setFileTree = (fileTree) => ({
  type: 'SET_FILE_TREE',
  fileTree,
});

export const setFile = (id) => ({
  type: 'SET_FILE',
  id,
});

export const removeFile = (id) => ({
  type: 'REMOVE_FILE',
  id,
});

export const startRemoveFile = (id) => (dispatch) => removeFileDb(id).then((res) => {
  if (res) dispatch(removeFile(id));
});

export const updateFile = (file) => ({
  type: 'UPDATE_FILE',
  file,
});

export const startUpdateFile = (file) => (dispatch) => updateFileDb(file).then((res) => {
  if (res) dispatch(updateFile(file));
});
