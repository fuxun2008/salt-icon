import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class IconShoppingCar extends React.Component {
  render() {
    try {
      const Svg = require('../svg/shopping-car.svg');
      return <Svg {...this.props} />
    } catch(e) {
      console.error(`cant't find svg: shopping-car`);
      return null;
    }
  }
}

IconShoppingCar.defaultProps = {
  className: '',
  name: '',
  width: '32px',
  height: '32px',
  fill: '#000',
  onClick: () => {},
};


// https://facebook.github.io/react/docs/reusable-components.html
IconShoppingCar.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  fill: PropTypes.string,
  onClick: PropTypes.func,
};

IconShoppingCar.displayName = 'IconShoppingCar';

export default IconShoppingCar;
