// react libraries
import * as React from 'react';

// third-party libraries
import { Button, Spinner } from 'react-bootstrap';

// styles
import './Button.scss';

const Btn = (props) => {
  let {
    variant,
    name,
    disabled,
    classes,
    size,
    alignImageRight = true,
  } = props;

  const renderButtonContents = () => {
    if (props.isLoading) {
      return (
        <React.Fragment>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          /> 
          Loading...
        </React.Fragment>
      );
    }

    return alignImageRight
      ? (
          <React.Fragment>
            {name} {props.icon && <img src={props.icon} alt="icon" />}
          </React.Fragment>
        )
      : (
          <React.Fragment>
            {props.icon && <img src={props.icon} alt="icon" />} {name}
          </React.Fragment>
        );
  };

  return (
    <Button
      variant={variant}
      size={size}
      disabled={disabled}
      classes={`default ${classes}`}>
      {renderButtonContents()}
    </Button>
  );
};

export default Btn;