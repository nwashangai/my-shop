import React from 'react';

// Components
import Button from '../Button';
import RadioButtonGroup from '../RadioButton';
import ExclusiveButtonGroup from '../ExclusiveButtonGroup';

// Utilities
import mapInterfaceToComponent from '../../utilities/mapInterfaceToComponent';

// Styles
import './SideBar.scss';

// Interfaces
import { propTypes, defaultProps } from './interface.int';

// Fixtures
import { colors, sizes } from './fixtures';

const SideBar = mapInterfaceToComponent(
  ({ classes, selectedOptions, selectOption }) => (
    <div className={`side-bar ${classes}`}>
      <React.Fragment>
        <div className="side-bar__title">Categories</div>
        <div className="side-bar__categories">
          <div className="side-bar__category">Women</div>
          <div className="side-bar__category">Men</div>
          <div className="side-bar__category">Children</div>
        </div>
      </React.Fragment>
      <React.Fragment>
        <div className="side-bar__title">Filters</div>
        <div className="side-bar__filters">
          <div className="side-bar__colors-header">Colors</div>
          <RadioButtonGroup
            colors={colors}
            name="filter-color"
            classes="side-bar__colors"
            selectedColor={selectedOptions.selectedColor}
            selectColor={selectOption}
          />
          <div className="side-bar__colors-header">Sizes</div>
          <ExclusiveButtonGroup
            classes="side-bar__sizes"
            selectedButton={selectedOptions.selectedButton}
            styleClass="exclusive-button__size"
            buttons={sizes}
            selectButton={selectOption}
          />
          <div className="side-bar__clear-container">
            <Button name="Apply" classes="side-bar__apply-filter sell-button" />
            <Button name="x Clear All" classes="side-bar__clear-filter sell-button" />
          </div>
        </div>
      </React.Fragment>
    </div>
  ),
  propTypes,
  defaultProps,
);

export default SideBar;
