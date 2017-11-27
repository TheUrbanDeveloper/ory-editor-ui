'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _device = require('device.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var description = _ref.description,
      icon = _ref.icon,
      onClick = _ref.onClick,
      active = _ref.active,
      disabled = _ref.disabled;
  return _react2.default.createElement(
    'div',
    { className: 'ory-controls-mode-toggle-button' },
    _react2.default.createElement(
      'div',
      { className: 'ory-controls-mode-toggle-button-inner' },
      _react2.default.createElement(
        _Button2.default,
        {
          fab: true,
          secondary: active,
          mini: _device.device.mobile,
          onTouchTap: onClick,
          disabled: disabled
        },
        icon
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'ory-controls-mode-toggle-button-description' },
      description
    )
  );
};
exports.default = Button;
//# sourceMappingURL=index.js.map