'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/DisplayModeToggle/Button/index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FloatingActionButton = require('material-ui/FloatingActionButton');

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

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
    { className: 'ory-controls-mode-toggle-button', __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    },
    _react2.default.createElement(
      'div',
      { className: 'ory-controls-mode-toggle-button-inner', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: undefined
      },
      _react2.default.createElement(
        _FloatingActionButton2.default,
        {
          secondary: active,
          mini: _device.device.mobile,
          onTouchTap: onClick,
          disabled: disabled,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: undefined
        },
        icon
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'ory-controls-mode-toggle-button-description', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: undefined
      },
      description
    )
  );
};

exports.default = Button;
//# sourceMappingURL=index.js.map