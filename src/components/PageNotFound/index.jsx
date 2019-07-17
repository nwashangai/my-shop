// react library
import * as React from 'react';

// third party libraries
import PropTypes from 'prop-types';

// third-party libraries
import { Link } from 'react-router-dom';

// styles
import './PageNotFound.scss';

/**
 * Renders the page not found error message
 *
 * @returns {JSX}
 */

const PageNotFound = props => (
  <div className="page-not-found">
    <div className="page-not-found--page-not-found-body">
      <h1 className="page-not-found--page-not-found-body--404">404</h1>
      <p>
        Oops! the requested page cannot be found,
        <br />
        that&apos;s all we know!
      </p>
      <h6>
        Please continue to the{' '}
        <Link to="/analytics" replace>
          analytics page
        </Link>{' '}
        or
        <span onClick={props.history.goBack}> go back </span>to the previous page
      </h6>
    </div>
  </div>
);

PageNotFound.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.string.isRequired,
  }).isRequired,
};

export default PageNotFound;
