'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shouldComponentUpdate = require('ory-editor-core/lib/helper/shouldComponentUpdate');

var _reactDnd = require('react-dnd');

var _helper = require('./helper');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = require('react-redux');

var _drag = require('ory-editor-core/lib/actions/cell/drag');

var _display = require('ory-editor-core/lib/actions/display');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var instances = {};

var Draggable = function (_Component) {
  _inherits(Draggable, _Component);

  function Draggable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Draggable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Draggable.__proto__ || Object.getPrototypeOf(Draggable)).call.apply(_ref, [this].concat(args))), _this), _this.shouldComponentUpdate = _shouldComponentUpdate.shouldPureComponentUpdate, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Draggable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var img = new Image();
      img.onload = function () {
        return _this2.props.connectDragPreview(img);
      };
      img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAhCAYAAACbffiEAAAA6UlEQVRYhe2ZQQ6CMBBFX0njHg7ESXTp1p3uvIBewc3Em3AfdelSFwRDCAm01JRO+pa0lP8zzc9kMCKyAa7AFqhIixdwB44WuACHuHq8KWm1vwtgF1lMCPaWkevUNE3Qr9R17XTu1P5uvUdV+IpbG2qMGBH5xBYRAjUVUWPEjj10SS3XRFry3kha/VBTETVGcmqtDTVGFqdWn7k9ku96f88QNRVRYySn1tpQY8QptXz7qinmnpt7rZTIqbU21BgJ2mv1+XfCDVFTETVGjIg8SG8KP+RZ0I7lU+dmgRNgaKfyZVw9znT/R85fOHJJE77U6UcAAAAASUVORK5CYII=';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          connectDragSource = _props.connectDragSource,
          isDragging = _props.isDragging,
          children = _props.children,
          className = _props.className;

      var classes = (0, _classnames2.default)(className, { 'ory-toolbar-draggable-is-dragged': isDragging }, 'ory-toolbar-draggable');

      return connectDragSource(_react2.default.createElement(
        'div',
        { className: classes },
        children
      ));
    }
  }]);

  return Draggable;
}(_react.Component);

var mapStateToProps = null;

var mapDispatchToProps = { insertMode: _display.insertMode, editMode: _display.editMode, layoutMode: _display.layoutMode, clearHover: _drag.clearHover };

exports.default = function () {
  var dragType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'CELL';

  if (!instances[dragType]) {
    instances[dragType] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactDnd.DragSource)(dragType, _helper.source, _helper.collect)(Draggable));
  }

  return instances[dragType];
};
//# sourceMappingURL=index.js.map