// react library
import * as React from 'react';

// third party libraries
import { Badge, Form, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faSignOutAlt, faUser, faBriefcase } from '@fortawesome/free-solid-svg-icons';

// interface
import { props } from './interface.d';

// styles
import './NavBar.scss';

const Navbar = ({ name, badge, handleCart }) => (
  <React.Fragment>
    <div className="nav-bar">
      <div className="nav-bar__child nav-bar__user">
        <span className="nav-bar__pad">
          <span>Hi!&nbsp;</span>
          {name ? (
            <>
              <Dropdown>
                <Dropdown.Toggle variant="" className="dropdown-basic">
                  <div className="nav-bar__danger cursor">{name}</div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1" className="cursor">
                    <FontAwesomeIcon icon={faBriefcase} /> Cart
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" className="cursor">
                    <FontAwesomeIcon icon={faUser} /> Profile
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" className="cursor">
                    <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          ) : (
            <span>
              <span className="nav-bar__danger cursor">Sign in</span> or{' '}
              <span className="nav-bar__danger cursor">Register</span>
            </span>
          )}
        </span>
      </div>
      <div className="nav-bar__child nav-bar__info-container">
        <span className="nav-bar__pad cursor">Daily Deals</span>
        <span className="nav-bar__pad cursor">Sell</span>
        <span className="nav-bar__pad cursor">Help &amp; Contact</span>
      </div>
      <div className="nav-bar__child nav-bar__bills">
        <div className="nav-bar__flex">
          <img src={`${process.env.PUBLIC_URL}/auth-icons/britain.png`} alt="" className="nav-bar__flag" />
          <span className="nav-bar__pad">£ GBP</span>
        </div>
        <div className="nav-bar__pad nav-bar__flex">
          <div className="nav-bar__badge-container cursor" onClick={handleCart}>
            <img src={`${process.env.PUBLIC_URL}/auth-icons/bag.png`} alt="" className="nav-bar__cart" />
            <Badge variant="danger" className="nav-bar__badge-container__badge">
              {badge}
            </Badge>
          </div>
          <span>Your bag: £3.99</span>
        </div>
      </div>
    </div>
    <div className="nav-bar-scondary">
      <div
        className="nav-bar-scondary__logo cursor"
        onClick={() => {
          window.location = '/';
        }}
      >
        S H O P M A T E
      </div>
      <div className="nav-bar-scondary__department-container">
        <span className="nav-bar-scondary__department-data cursor">Women</span>
        <span className="nav-bar-scondary__department-data cursor">Men</span>
        <span className="nav-bar-scondary__department-data cursor">Kids</span>
        <span className="nav-bar-scondary__department-data cursor">Shoes</span>
        <span className="nav-bar-scondary__department-data cursor">Brands</span>
      </div>
      <div className="nav-bar-scondary__search">
        <div className="nav-bar-scondary__search-content">
          <span className="nav-bar-scondary__search-content__input">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <Form.Control
            size="lg"
            className="nav-bar-scondary__search-content__input-box"
            placeholder="search anything"
          />
          <span className="nav-bar-scondary__search-content__close">
            <FontAwesomeIcon icon={faTimes} className="cursor" />
          </span>
        </div>
      </div>
    </div>
  </React.Fragment>
);

Navbar.propTypes = props.propTypes;
// Navbar.defaultProps = props.default;

export default Navbar;
