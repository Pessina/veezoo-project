import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import Sidebar from './Sidebar';
import { getFileTree } from '../db/db';
import { setFileTree } from '../actions/files';
import configureStore from '../store/configureStore';
import Editor from './Editor';

const store = configureStore();

const App = () => {
  const [render, setRender] = useState(false);

  const getData = () => {
    getFileTree().then((res) => {
      if (res) {
        store.dispatch(setFileTree(res.data));
        setRender(true);
      }
    });
  };

  useEffect(getData, []);

  // Wait server response
  if (!render) {
    return <div className="center">Loading ...</div>;
  }

  return (
    <Provider store={store}>
      <div className="main__container">
        <div className="sidebar__container">
          <h2>Files</h2>
          <Sidebar />
        </div>
        <div className="editor__container">
          <Editor />
        </div>
      </div>
    </Provider>
  );
};

export default App;
