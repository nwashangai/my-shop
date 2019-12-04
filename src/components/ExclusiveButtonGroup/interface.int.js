// third party libraries
import PropTypes from 'prop-types';

export const propTypes = {
  classes: PropTypes.string,
  buttons: PropTypes.array,
  styleClass: PropTypes.string,
  selectColor: PropTypes.func,
  selectedColor: PropTypes.string,
};

export const defaultProps = {
  buttons: [],
  classes: '',
  styleClass: '',
  selectColor: () => null,
};
