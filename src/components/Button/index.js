import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Button({ clickShake, clicked }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      onClick={clickShake}
      className={`shake-button${clicked ? ' clicked' : ''}`}
    >
      SHAKE
    </button>
  );
}

Button.propTypes = {
  clickShake: PropTypes.func.isRequired,
  clicked: PropTypes.bool.isRequired
};

export default Button;
