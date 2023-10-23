import PropTypes from 'prop-types';

export default function Square({ color }) {
  const squareStyle = {
    width: '300px',
    height: '250px',
    backgroundColor: color,
  };

  return <div className='square' style={squareStyle}></div>;
}

Square.propTypes = {
  color: PropTypes.string.isRequired,
};

