import React from 'react';

// Components
import Button from '../Button';

// Utilities
import mapInterfaceToComponent from '../../utilities/mapInterfaceToComponent';

// Styles
import './ExclusiveButtonGroup.scss';

// Interfaces
import { propTypes, defaultProps } from './interface.int';

const ExclusiveButtonGroup = mapInterfaceToComponent(
  ({ classes, buttons, selectedButton, styleClass, selectButton }) => (
    <div className={`exclusive-button ${classes}`}>
      {buttons.map(button => (
        <Button
          key={button.name}
          name={button.name}
          id="selectedButton"
          value={button.value}
          classes={`${styleClass} ${selectedButton === button.value && 'exclusive-button__selected'}`}
          onClick={selectButton}
          size="small"
        />
      ))}
    </div>
  ),
  propTypes,
  defaultProps,
);

export default ExclusiveButtonGroup;
