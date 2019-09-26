import React from 'react';

// third party libraries
import { shallow } from 'enzyme';

// components
import NavBar from '.';

describe('<Navbar /> component', () => {
  const props = {
    name: 'john',
    badge: 3,
    handleCart: jest.fn(),
  };
  it('should render the Navbar component', () => {
    const wrapper = shallow(<NavBar {...props} />);
    expect(wrapper.find('.nav-bar-scondary__logo').exists).toBeTruthy();
  });

  it('should render the Navbar component without user looged in', () => {
    delete props.name;
    const wrapper = shallow(<NavBar {...props} />);
    wrapper
      .find('.nav-bar-scondary__logo')
      .at(0)
      .simulate('click');
    expect(wrapper.find('.nav-bar-scondary__logo').exists).toBeTruthy();
  });
});
