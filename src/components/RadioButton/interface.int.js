// third party libraries
import PropTypes from 'prop-types';

export const propTypes = {
  classes: PropTypes.any,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  selectColor: PropTypes.func,
  style: PropTypes.object,
};

export const defaultProps = {
  classes: '',
  selectColor: () => null,
};

export const groupPropTypes = {
  colors: PropTypes.array,
  classes: PropTypes.string,
  name: PropTypes.string,
  selectedColor: PropTypes.string,
  selectColor: PropTypes.func,
  style: PropTypes.object,
};

export const groupDefaultProps = {
  colors: [],
  classes: '',
  selectColor: () => null,
};
