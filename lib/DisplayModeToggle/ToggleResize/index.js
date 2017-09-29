'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/DisplayModeToggle/ToggleResize/index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _settingsOverscan = require('material-ui/svg-icons/action/settings-overscan');

var _settingsOverscan2 = _interopRequireDefault(_settingsOverscan);

var _reactRedux = require('react-redux');

var _display = require('ory-editor-core/lib/actions/display');

var _display2 = require('ory-editor-core/lib/selector/display');

var _reselect = require('reselect');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Inner = function Inner(_ref) {
  var isResizeMode = _ref.isResizeMode,
      resizeMode = _ref.resizeMode;
  return _react2.default.createElement(_Button2.default, {
    icon: _react2.default.createElement(_settingsOverscan2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: undefined
    }),
    description: 'Resize things',
    active: isResizeMode,
    onClick: resizeMode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  });
};

var mapStateToProps = (0, _reselect.createStructuredSelector)({ isResizeMode: _display2.isResizeMode });
var mapDispatchToProps = { resizeMode: _display.resizeMode };

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Inner);
//# sourceMappingURL=index.js.map