// react libraries
import * as React from 'react';

// third-party libraries
import { Button, Spinner } from 'react-bootstrap';

// interface
import { propTypes } from './interface.d';

// styles
// import './Button.scss';

const Btn = props => {
  const { variant, name, disabled, classes, size, alignImageRight = true, ...rest } = props;

  const renderButtonContents = () => {
    if (rest.isLoading) {
      return (
        <React.Fragment>
          <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
          Loading...
        </React.Fragment>
      );
    }

    return alignImageRight ? (
      <React.Fragment>
        {name} {rest.icon && <img src={rest.icon} alt="icon" />}
      </React.Fragment>
    ) : (
      <React.Fragment>
        {rest.icon && <img src={rest.icon} alt="icon" />} {name}
      </React.Fragment>
    );
  };

  return (
    <Button variant={variant} size={size} disabled={disabled} className={`default ${classes}`}>
      {renderButtonContents()}
    </Button>
  );
};

Btn.propTypes = propTypes;
export default Btn;
