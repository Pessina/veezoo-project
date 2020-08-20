import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setFile } from '../actions/files';

const File = ({ file, dispatch }) => {
  const selectFile = async () => {
    dispatch(setFile(file.id));
  };

  return (
    <button type="button" onClick={selectFile} className="filetree-button button">
      <Icon name="file" color="blue" />
      {file.name}
    </button>
  );
};

File.propTypes = {
  file: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(File);
