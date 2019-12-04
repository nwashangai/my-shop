// third party libraries
import PropTypes from 'prop-types';

export const propTypes = {
  classes: PropTypes.string,
  selectedOptions: PropTypes.object.isRequired,
  selectOption: PropTypes.func,
};

export const defaultProps = {
  classes: '',
  selectColor: () => null,
};
