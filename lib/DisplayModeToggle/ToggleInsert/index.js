'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _add = require('material-ui/svg-icons/content/add');

var _add2 = _interopRequireDefault(_add);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _reactRedux = require('react-redux');

var _display = require('ory-editor-core/lib/actions/display');

var _display2 = require('ory-editor-core/lib/selector/display');

var _reselect = require('reselect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Inner = function Inner(_ref) {
  var isInsertMode = _ref.isInsertMode,
      insertMode = _ref.insertMode;
  return _react2.default.createElement(_Button2.default, {
    icon: _react2.default.createElement(_add2.default, null),
    description: 'Add things',
    active: isInsertMode,
    onClick: insertMode
  });
};


var mapStateToProps = (0, _reselect.createStructuredSelector)({ isInsertMode: _display2.isInsertMode });
var mapDispatchToProps = { insertMode: _display.insertMode };

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Inner);
//# sourceMappingURL=index.js.map