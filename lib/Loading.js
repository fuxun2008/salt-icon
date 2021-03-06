module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(2);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconLoading = function (_React$Component) {
	  _inherits(IconLoading, _React$Component);

	  function IconLoading() {
	    _classCallCheck(this, IconLoading);

	    return _possibleConstructorReturn(this, (IconLoading.__proto__ || Object.getPrototypeOf(IconLoading)).apply(this, arguments));
	  }

	  _createClass(IconLoading, [{
	    key: 'render',
	    value: function render() {
	      try {
	        var Svg = __webpack_require__(68);
	        return _react2.default.createElement(Svg, this.props);
	      } catch (e) {
	        console.error('cant\'t find svg: loading');
	        return null;
	      }
	    }
	  }]);

	  return IconLoading;
	}(_react2.default.Component);

	IconLoading.defaultProps = {
	  className: '',
	  name: '',
	  width: '32px',
	  height: '32px',
	  fill: '#000',
	  onClick: function onClick() {}
	};

	// https://facebook.github.io/react/docs/reusable-components.html
	IconLoading.propTypes = {
	  className: _propTypes2.default.string,
	  name: _propTypes2.default.string.isRequired,
	  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	  fill: _propTypes2.default.string,
	  onClick: _propTypes2.default.func
	};

	IconLoading.displayName = 'IconLoading';

	exports.default = IconLoading;
	module.exports = exports['default'];

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = require("classnames");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = require("prop-types");

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(2);

	var _classnames3 = _interopRequireDefault(_classnames2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Icon = function (_React$Component) {
	  _inherits(Icon, _React$Component);

	  function Icon() {
	    _classCallCheck(this, Icon);

	    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
	  }

	  _createClass(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          onClick = _props.onClick,
	          className = _props.className,
	          others = _objectWithoutProperties(_props, ['onClick', 'className']);

	      return _react2.default.createElement(
	        'div',
	        {
	          onClick: onClick,
	          style: {
	            display: 'inline-block',
	            lineHeight: 0
	          },
	          className: (0, _classnames3.default)('t-icon t-svg', _defineProperty({}, className, !!className))
	        },
	        _react2.default.createElement(
	          'div',
	          { style: { position: 'relative' } },
	          _react2.default.createElement(
	            'svg',
	            others,
	            _react2.default.createElement('path', { fill: 'none', d: 'M0 0h100v100H0z' }),
	            _react2.default.createElement(
	              'rect',
	              { width: '7', height: '20', x: '46.5', y: '40', rx: '5', ry: '5', transform: 'translate(0 -30)' },
	              _react2.default.createElement('animate', { attributeName: 'opacity', begin: '0s', dur: '1s', from: '1', repeatCount: 'indefinite', to: '0' })
	            ),
	            _react2.default.createElement(
	              'rect',
	              { width: '7', height: '20', x: '46.5', y: '40', rx: '5', ry: '5', transform: 'rotate(30 105.98 65)' },
	              _react2.default.createElement('animate', { attributeName: 'opacity', begin: '0.08333333333333333s', dur: '1s', from: '1', repeatCount: 'indefinite', to: '0' })
	            ),
	            _react2.default.createElement(
	              'rect',
	              { width: '7', height: '20', x: '46.5', y: '40', rx: '5', ry: '5', transform: 'rotate(60 75.98 65)' },
	              _react2.default.createElement('animate', { attributeName: 'opacity', begin: '0.16666666666666666s', dur: '1s', from: '1', repeatCount: 'indefinite', to: '0' })
	            ),
	            _react2.default.createElement(
	              'rect',
	              { width: '7', height: '20', x: '46.5', y: '40', rx: '5', ry: '5', transform: 'rotate(90 65 65)' },
	              _react2.default.createElement('animate', { attributeName: 'opacity', begin: '0.25s', dur: '1s', from: '1', repeatCount: 'indefinite', to: '0' })
	            ),
	            _react2.default.createElement(
	              'rect',
	              { width: '7', height: '20', x: '46.5', y: '40', rx: '5', ry: '5', transform: 'rotate(120 58.66 65)' },
	              _react2.default.createElement('animate', { attributeName: 'opacity', begin: '0.3333333333333333s', dur: '1s', from: '1', repeatCount: 'indefinite', to: '0' })
	            ),
	            _react2.default.createElement(
	              'rect',
	              { width: '7', height: '20', x: '46.5', y: '40', rx: '5', ry: '5', transform: 'rotate(150 54.02 65)' },
	              _react2.default.createElement('animate', { attributeName: 'opacity', begin: '0.4166666666666667s', dur: '1s', from: '1', repeatCount: 'indefinite', to: '0' })
	            ),
	            _react2.default.createElement(
	              'rect',
	              { width: '7', height: '20', x: '46.5', y: '40', rx: '5', ry: '5', transform: 'rotate(180 50 65)' },
	              _react2.default.createElement('animate', { attributeName: 'opacity', begin: '0.5s', dur: '1s', from: '1', repeatCount: 'indefinite', to: '0' })
	            ),
	            _react2.default.createElement(
	              'rect',
	              { width: '7', height: '20', x: '46.5', y: '40', rx: '5', ry: '5', transform: 'rotate(-150 45.98 65)' },
	              _react2.default.createElement('animate', { attributeName: 'opacity', begin: '0.5833333333333334s', dur: '1s', from: '1', repeatCount: 'indefinite', to: '0' })
	            ),
	            _react2.default.createElement(
	              'rect',
	              { width: '7', height: '20', x: '46.5', y: '40', rx: '5', ry: '5', transform: 'rotate(-120 41.34 65)' },
	              _react2.default.createElement('animate', { attributeName: 'opacity', begin: '0.6666666666666666s', dur: '1s', from: '1', repeatCount: 'indefinite', to: '0' })
	            ),
	            _react2.default.createElement(
	              'rect',
	              { width: '7', height: '20', x: '46.5', y: '40', rx: '5', ry: '5', transform: 'rotate(-90 35 65)' },
	              _react2.default.createElement('animate', { attributeName: 'opacity', begin: '0.75s', dur: '1s', from: '1', repeatCount: 'indefinite', to: '0' })
	            ),
	            _react2.default.createElement(
	              'rect',
	              { width: '7', height: '20', x: '46.5', y: '40', rx: '5', ry: '5', transform: 'rotate(-60 24.02 65)' },
	              _react2.default.createElement('animate', { attributeName: 'opacity', begin: '0.8333333333333334s', dur: '1s', from: '1', repeatCount: 'indefinite', to: '0' })
	            ),
	            _react2.default.createElement(
	              'rect',
	              { width: '7', height: '20', x: '46.5', y: '40', rx: '5', ry: '5', transform: 'rotate(-30 -5.98 65)' },
	              _react2.default.createElement('animate', { attributeName: 'opacity', begin: '0.9166666666666666s', dur: '1s', from: '1', repeatCount: 'indefinite', to: '0' })
	            )
	          ),
	          _react2.default.createElement('div', {
	            style: {
	              position: 'absolute',
	              top: 0,
	              left: 0,
	              width: '100%',
	              height: '100%'
	            },
	            className: 't-icon-mask'
	          })
	        )
	      );
	    }
	  }]);

	  return Icon;
	}(_react2.default.Component);

	Icon.displayName = "Loading";
	Icon.defaultProps = { "preserveAspectRatio": "xMidYMid", "viewBox": "0 0 100 100" };
	exports.default = Icon;
	module.exports = exports['default'];

/***/ })

/******/ });