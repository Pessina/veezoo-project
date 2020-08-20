import React from 'react';
import PropTypes from 'prop-types';
import File from './File';
import Directory from './Directory';

const FileTree = ({ child }) => (
  child.map((el) => (
    <div key={el.id} className="filetree__item">
      {el.isDirectory ? (
        <Directory child={el}>
          {(open) => (open ? <FileTree child={el.children} /> : null)}
        </Directory>
      ) : <File file={el} />}
    </div>
  )));

FileTree.propTypes = {
  child: PropTypes.array.isRequired,
};

export default FileTree;
