'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDnd = require('react-dnd');

var _delete = require('material-ui/svg-icons/action/delete');

var _delete2 = _interopRequireDefault(_delete);

var _FloatingActionButton = require('material-ui/FloatingActionButton');

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _lib = require('ory-editor-core/lib');

var _reactRedux = require('react-redux');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _core = require('ory-editor-core/lib/actions/cell/core');

var _lodash = require('lodash.throttle');

var _lodash2 = _interopRequireDefault(_lodash);

var _display = require('ory-editor-core/lib/selector/display');

var _reselect = require('reselect');

var _Provider = require('../Provider');

var _Provider2 = _interopRequireDefault(_Provider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var target = {
  hover: (0, _lodash2.default)(function (props, monitor) {
    var item = monitor.getItem();
    if (monitor.isOver({ shallow: true })) {
      item.clearHover();
    }
  }, 200, { trailing: false }),

  drop: function drop(props, monitor) {
    var item = monitor.getItem();
    if (monitor.didDrop() || !monitor.isOver({ shallow: true })) {
      // If the item drop occurred deeper down the tree, don't do anything
      return;
    }

    props.removeCell(item.id);
  }
};

var connectMonitor = function connectMonitor(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOverCurrent: monitor.isOver({ shallow: true })
  };
};

var Raw = function Raw(_ref) {
  var isLayoutMode = _ref.isLayoutMode,
      connectDropTarget = _ref.connectDropTarget,
      isOverCurrent = _ref.isOverCurrent;
  return connectDropTarget(_react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)('ory-controls-trash', {
        'ory-controls-trash-active': isLayoutMode
      })
    },
    _react2.default.createElement(
      _FloatingActionButton2.default,
      {
        secondary: true,
        disabled: !isOverCurrent,
        disabledColor: 'rgba(0,0,0,.87)'
      },
      _react2.default.createElement(_delete2.default, {
        style: !isOverCurrent && {
          color: 'rgba(255,255,255,.87)',
          fill: 'rgba(255,255,255,.87)'
        }
      })
    )
  ));
};

var types = function types(_ref2) {
  var editor = _ref2.editor;

  var plugins = [].concat(_toConsumableArray(Object.keys(editor.plugins.plugins.layout)), _toConsumableArray(Object.keys(editor.plugins.plugins.content))).map(function (p) {
    return editor.plugins.plugins.content[p].name || editor.plugins.plugins.layout[p].name;
  });

  if (editor.plugins.hasNativePlugin()) {
    plugins.push(editor.plugins.getNativePlugin()().name);
  }

  return plugins;
};

var mapDispatchToProps = {
  removeCell: _core.removeCell
};

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  isEditMode: _display.isEditMode,
  isLayoutMode: _display.isLayoutMode,
  isPreviewMode: _display.isPreviewMode,
  isInsertMode: _display.isInsertMode,
  isResizeMode: _display.isResizeMode
});

var Decorated = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactDnd.DropTarget)(types, target, connectMonitor)(Raw));

var Trash = function Trash(props) {
  return _react2.default.createElement(
    _Provider2.default,
    props,
    _react2.default.createElement(Decorated, props)
  );
};

exports.default = Trash;
//# sourceMappingURL=index.js.map