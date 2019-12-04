import React from 'react';

// Style
import './Card.scss';

// Utilities
import mapInterfaceToComponent from '../../utilities/mapInterfaceToComponent';

// Interfaces
import { propTypes, defaultProps } from './interface.int';

const Card = mapInterfaceToComponent(
  ({ children, classes }) => <div className={`card-main ${classes}`}>{children}</div>,
  propTypes,
  defaultProps,
);

export default Card;
