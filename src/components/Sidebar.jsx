import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FileTree from './FileTree';

const Sidebar = ({ fileTree }) => (
  <FileTree child={fileTree} />
);

Sidebar.propTypes = {
  fileTree: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  fileTree: state.fileTree,
});

export default connect(mapStateToProps)(Sidebar);
