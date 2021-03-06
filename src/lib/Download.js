import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class IconDownload extends React.Component {
  render() {
    try {
      const Svg = require('../svg/download.svg');
      return <Svg {...this.props} />
    } catch(e) {
      console.error(`cant't find svg: download`);
      return null;
    }
  }
}

IconDownload.defaultProps = {
  className: '',
  name: '',
  width: '32px',
  height: '32px',
  fill: '#000',
  onClick: () => {},
};


// https://facebook.github.io/react/docs/reusable-components.html
IconDownload.propTypes = {
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

IconDownload.displayName = 'IconDownload';

export default IconDownload;
