import PropTypes from 'prop-types';
import './Button.css'; 

function Button({ hexCode, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {hexCode}
    </button>
  );
}

Button.propTypes = {
  hexCode: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
