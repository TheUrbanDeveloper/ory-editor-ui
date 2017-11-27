'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Create = require('material-ui-icons/Create');

var _Create2 = _interopRequireDefault(_Create);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _reactRedux = require('react-redux');

var _display = require('ory-editor-core/lib/actions/display');

var _display2 = require('ory-editor-core/lib/selector/display');

var _reselect = require('reselect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Inner = function Inner(_ref) {
  var isEditMode = _ref.isEditMode,
      editMode = _ref.editMode;
  return _react2.default.createElement(_Button2.default, {
    icon: _react2.default.createElement(_Create2.default, null),
    description: 'Edit things',
    active: isEditMode,
    onClick: editMode
  });
};


var mapStateToProps = (0, _reselect.createStructuredSelector)({ isEditMode: _display2.isEditMode });
var mapDispatchToProps = { editMode: _display.editMode };

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Inner);
//# sourceMappingURL=index.js.map