'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dismissedMobilePreviewKey = undefined;
var _jsxFileName = 'src/Notifier/index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Snackbar = require('material-ui/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _setting = require('ory-editor-core/lib/actions/setting');

var _setting2 = require('ory-editor-core/lib/selector/setting');

var _i18n = require('ory-editor-core/lib/service/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dismissedMobilePreviewKey = exports.dismissedMobilePreviewKey = 'mobile-preview-dismissed';

var handleDismiss = function handleDismiss(updateSetting, id) {
  return function () {
    return updateSetting('notifier.' + id, true);
  };
};

var Notifier = function Notifier(_ref) {
  var dismissed = _ref.dismissed,
      id = _ref.id,
      open = _ref.open,
      _ref$action = _ref.action,
      action = _ref$action === undefined ? 'dismiss' : _ref$action,
      message = _ref.message,
      updateSetting = _ref.updateSetting;
  return _react2.default.createElement(_Snackbar2.default, {
    open: open && !dismissed,
    action: action,
    message: _i18n2.default.t(message),
    onActionTouchTap: handleDismiss(updateSetting, id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  });
};

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  dismissed: function dismissed(state, props) {
    return (0, _setting2.getSetting)('notifier.' + props.id)(state);
  }
});

var mapActionsToProps = {
  updateSetting: _setting.updateSetting
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapActionsToProps)(Notifier);
//# sourceMappingURL=index.js.map