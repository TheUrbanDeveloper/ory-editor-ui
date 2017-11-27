'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ViewQuilt = require('material-ui-icons/ViewQuilt');

var _ViewQuilt2 = _interopRequireDefault(_ViewQuilt);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _reactRedux = require('react-redux');

var _display = require('ory-editor-core/lib/actions/display');

var _display2 = require('ory-editor-core/lib/selector/display');

var _reselect = require('reselect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Inner = function Inner(_ref) {
  var isLayoutMode = _ref.isLayoutMode,
      layoutMode = _ref.layoutMode;
  return _react2.default.createElement(_Button2.default, {
    icon: _react2.default.createElement(_ViewQuilt2.default, null),
    description: 'Move things',
    active: isLayoutMode,
    onClick: layoutMode
  });
};


var mapStateToProps = (0, _reselect.createStructuredSelector)({ isLayoutMode: _display2.isLayoutMode });
var mapDispatchToProps = { layoutMode: _display.layoutMode };

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Inner);
//# sourceMappingURL=index.js.map