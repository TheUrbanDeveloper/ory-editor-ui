'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _lib = require('ory-editor-core/lib');

var _DragDropContext = require('ory-editor-core/lib/components/DragDropContext');

var _DragDropContext2 = _interopRequireDefault(_DragDropContext);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Provider = function (_Component) {
  _inherits(Provider, _Component);

  function Provider(props) {
    _classCallCheck(this, Provider);

    var _this = _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).call(this, props));

    _this.DragDropContext = (0, _DragDropContext2.default)(props.editor.dragDropContext);
    return _this;
  }

  _createClass(Provider, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          editor = _props.editor,
          _props$children = _props.children,
          children = _props$children === undefined ? [] : _props$children;

      var DragDropContext = this.DragDropContext;
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: editor.store },
        _react2.default.createElement(
          DragDropContext,
          null,
          _react2.default.createElement(
            _MuiThemeProvider2.default,
            { muiTheme: (0, _getMuiTheme2.default)() },
            children
          )
        )
      );
    }
  }]);

  return Provider;
}(_react.Component);

exports.default = Provider;
//# sourceMappingURL=index.js.map