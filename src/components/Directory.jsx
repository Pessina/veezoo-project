import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Directory = ({ child, children }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <button type="button" onClick={toggleOpen} className="filetree-button button">
        <Icon name="folder" color="grey" />
        {child.name}
      </button>
      {children(open)}
    </>
  );
};

Directory.propTypes = {
  child: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired,
};

export default Directory;
