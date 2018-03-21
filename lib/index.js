'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('nprogress/nprogress.css');

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_Component) {
	_inherits(_default, _Component);

	function _default() {
		_classCallCheck(this, _default);

		return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	_default.prototype.componentDidMount = function componentDidMount() {
		var listener = {
			tempOpen: XMLHttpRequest.prototype.open,
			tempSend: XMLHttpRequest.prototype.send,
			callback: function callback() {}
		};

		XMLHttpRequest.prototype.open = function () {
			var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
			var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

			_nprogress2.default.start();
			listener.tempOpen.apply(this, arguments);
			listener.method = a;
			listener.url = b;
			if (a.toLowerCase() == 'get') {
				listener.data = b.split('?');
				listener.data = listener.data[1];
			}
		};

		XMLHttpRequest.prototype.send = function () {
			var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
			var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

			setTimeout(function () {
				_nprogress2.default.done();
			}, 500);
			listener.tempSend.apply(this, arguments);
			if (listener.method.toLowerCase() == 'post') {
				listener.data = a;
			};
			listener.callback();
		};
	};

	_default.prototype.render = function render() {
		return false;
	};

	return _default;
}(_react.Component);

exports.default = _default;
module.exports = exports['default'];