import React from 'react';

// Third-party compontent

// Utilities
import mapInterfaceToComponent from '../../utilities/mapInterfaceToComponent';

// Styles
import './RadioButton.scss';

// Interfaces
import { propTypes, groupPropTypes, defaultProps, groupDefaultProps } from './interface.int';

export const RadioButton = mapInterfaceToComponent(
  ({ classes, name, value, selectColor, style }) => (
    <div className={`radio-button ${classes}`}>
      <div className="button-option" style={style}>
        <input
          type="radio"
          id="selectedColor"
          className="radio-button__input"
          name={name}
          value={value}
          onClick={selectColor}
        />
      </div>
    </div>
  ),
  propTypes,
  defaultProps,
);

const RadioButtonGroup = mapInterfaceToComponent(
  ({ classes, colors, selectedColor, name, selectColor }) => (
    <div className={classes}>
      {colors.map(color => (
        <RadioButton
          key={color.id}
          classes={selectedColor === color.id && 'radio-button__selected'}
          name={name}
          style={{ background: color.value }}
          value={color.value}
          selectColor={selectColor}
        />
      ))}
    </div>
  ),
  groupPropTypes,
  groupDefaultProps,
);

export default RadioButtonGroup;
