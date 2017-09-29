'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/DisplayModeToggle/TogglePreview/index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _devices = require('material-ui/svg-icons/device/devices');

var _devices2 = _interopRequireDefault(_devices);

var _reactRedux = require('react-redux');

var _display = require('ory-editor-core/lib/actions/display');

var _display2 = require('ory-editor-core/lib/selector/display');

var _reselect = require('reselect');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Inner = function Inner(_ref) {
  var isPreviewMode = _ref.isPreviewMode,
      previewMode = _ref.previewMode;
  return _react2.default.createElement(_Button2.default, {
    icon: _react2.default.createElement(_devices2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: undefined
    }),
    description: 'Preview result',
    active: isPreviewMode,
    onClick: previewMode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  });
};

var mapStateToProps = (0, _reselect.createStructuredSelector)({ isPreviewMode: _display2.isPreviewMode });
var mapDispatchToProps = { previewMode: _display.previewMode };

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Inner);
//# sourceMappingURL=index.js.map