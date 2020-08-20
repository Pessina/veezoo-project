import { removeRecursivelyFiletree, updateRecursivelyFiletree } from '../utils/utils';

const filesDefaultState = {};

export default (state = filesDefaultState, action) => {
  switch (action.type) {
    case 'SET_FILE_TREE':
      return {
        fileTree: action.fileTree,
        openFile: null,
      };
    case 'SET_FILE':
      return {
        ...state,
        openFile: action.id,
      };
    case 'REMOVE_FILE':
      return {
        fileTree: removeRecursivelyFiletree(state.fileTree, action.id),
        openFile: null,
      };
    case 'UPDATE_FILE':
      return {
        ...state,
        fileTree: updateRecursivelyFiletree(state.fileTree, action.file),
      };
    default:
      return state;
  }
};
