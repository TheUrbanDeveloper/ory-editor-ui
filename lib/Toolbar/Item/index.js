'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Draggable = require('../Draggable');

var _Draggable2 = _interopRequireDefault(_Draggable);

var _ListItem = require('material-ui/List/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _oryEditorCore = require('ory-editor-core');

var _DragHandle = require('material-ui-icons/DragHandle');

var _DragHandle2 = _interopRequireDefault(_DragHandle);

var _rcTooltip = require('rc-tooltip');

var _rcTooltip2 = _interopRequireDefault(_rcTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Item);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Item.__proto__ || Object.getPrototypeOf(Item)).call.apply(_ref, [this].concat(args))), _this), _this.state = { tooltipVisible: false }, _this.onMouseEnter = function () {
      _this.setState({ tooltipVisible: true });
    }, _this.onMouseLeave = function () {
      _this.setState({ tooltipVisible: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          plugin = _props.plugin,
          insert = _props.insert;

      if (!plugin.IconComponent && !plugin.text) {
        // logger.warn('Plugin text or plugin icon missing', plugin)
        return null;
      }

      var Draggable = (0, _Draggable2.default)(plugin.name);

      // not using css modules here because they don't work with svg icons
      return _react2.default.createElement(_ListItem2.default, {
        leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: plugin.IconComponent }),
        primaryText: plugin.text,
        secondaryText: plugin.description,
        secondaryTextLines: 2,
        disabled: true,
        className: 'ory-toolbar-item',
        rightIcon: _react2.default.createElement(
          'span',
          {
            className: 'ory-toolbar-item-drag-handle-button',
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave,
            onMouseDown: this.onMouseLeave
          },
          _react2.default.createElement(
            Draggable,
            { insert: insert },
            _react2.default.createElement(
              _rcTooltip2.default,
              {
                visible: this.state.tooltipVisible,
                placement: 'bottomLeft',
                overlay: _react2.default.createElement(
                  'span',
                  null,
                  'Drag me!'
                )
              },
              _react2.default.createElement(_DragHandle2.default, { className: 'ory-toolbar-item-drag-handle' })
            )
          )
        )
      });
    }
  }]);

  return Item;
}(_react.Component);

exports.default = Item;
//# sourceMappingURL=index.js.map