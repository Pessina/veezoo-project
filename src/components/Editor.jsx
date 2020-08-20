import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startRemoveFile, startUpdateFile } from '../actions/files';
import { getFile } from '../db/db';

class Editor extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      file: null,
    };

    this.save = this.save.bind(this);
    this.remove = this.remove.bind(this);
    this.fetch = this.fetch.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { openFile } = this.props;
    if (openFile && prevProps.openFile !== openFile) {
      this.fetch(openFile);
    }
  }

  onChangeInput({ target }) {
    const { name, value } = target;
    this.setState((prevState) => ({
      file: {
        ...prevState.file,
        [name]: value,
      },
    }));
  }

  save(e) {
    e.preventDefault();
    const { file } = this.state;
    const { dispatch } = this.props;
    dispatch(startUpdateFile(file));
  }

  remove() {
    const { file } = this.state;
    const { dispatch } = this.props;
    dispatch(startRemoveFile(file.id));
  }

  async fetch(id) {
    const res = await getFile(id);
    this.setState(() => ({ file: res.data }));
  }

  render() {
    const { file } = this.state;
    const { openFile } = this.props;

    if (!openFile || !file) return <h3>There is no file selected</h3>;

    return (
      <>
        <form onSubmit={this.save} className="editor-form">
          <input value={file.name} onChange={this.onChangeInput} name="name" className="input editor__title " />
          <textarea value={file.content} onChange={this.onChangeInput} name="content" className="editor__content input" />
          <div className="editor-buttons__container">
            <button onClick={this.remove} type="button" className="editor-button editor-button__delete button">Delete</button>
            <button type="submit" className="editor-button editor-button__save button">Save</button>
          </div>
        </form>
      </>
    );
  }
}

Editor.propTypes = {
  openFile: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
};

Editor.defaultProps = {
  openFile: null,
};

const mapStateToProps = (state) => ({
  openFile: state.openFile,
  fileTree: state.fileTree,
});

export default connect(mapStateToProps)(Editor);
