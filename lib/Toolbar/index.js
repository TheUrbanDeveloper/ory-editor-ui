'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/Toolbar/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _reactRedux = require('react-redux');

var _display = require('ory-editor-core/lib/selector/display');

var _reselect = require('reselect');

var _lib = require('ory-editor-core/lib');

var _List = require('material-ui/List/List');

var _List2 = _interopRequireDefault(_List);

var _Subheader = require('material-ui/Subheader');

var _Subheader2 = _interopRequireDefault(_Subheader);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _classes = require('ory-editor-core/lib/service/plugin/classes');

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _Provider = require('../Provider');

var _Provider2 = _interopRequireDefault(_Provider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Raw = function (_Component) {
  _inherits(Raw, _Component);

  function Raw(props) {
    _classCallCheck(this, Raw);

    var _this = _possibleConstructorReturn(this, (Raw.__proto__ || Object.getPrototypeOf(Raw)).call(this, props));

    _this.onRef = function (component) {
      _this.input = component;
    };

    _this.onSearch = function (e) {
      var target = e.target;
      if (target instanceof HTMLInputElement) {
        _this.setState({
          searchFilter: function (v) {
            return function (_ref) {
              var _ref$text = _ref.text,
                  text = _ref$text === undefined ? '' : _ref$text;
              return text.toLowerCase().indexOf(v) > -1;
            };
          }(target.value.toLowerCase()),
          isSearching: target.value.length > 0
        });
      }
    };

    _this.state = {
      searchFilter: function searchFilter(a) {
        return a;
      },
      isSearching: false
    };

    _this.onSearch = _this.onSearch.bind(_this);
    return _this;
  }

  _createClass(Raw, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var input = this.input;
      if (input && this.props.isInsertMode && input instanceof HTMLElement) {
        setTimeout(function () {
          var e = input.querySelector('input');
          if (e) {
            e.focus();
          }
        }, 100);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isInsertMode = _props.isInsertMode,
          plugins = _props.editor.plugins;
      var searchFilter = this.state.searchFilter;

      var content = plugins.plugins.content.filter(searchFilter);
      var layout = plugins.plugins.layout.filter(searchFilter);

      return _react2.default.createElement(
        _Drawer2.default,
        { className: 'ory-toolbar-drawer', open: isInsertMode, __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        },
        _react2.default.createElement(
          _Subheader2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            },
            __self: this
          },
          'Add plugin to content'
        ),
        _react2.default.createElement(
          'div',
          { style: { padding: '0 16px' }, ref: this.onRef, __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          },
          _react2.default.createElement(_TextField2.default, {
            hintText: 'Search plugins',
            fullWidth: true,
            onChange: this.onSearch,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            },
            __self: this
          })
        ),
        _react2.default.createElement(
          _List2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          },
          content.length ? _react2.default.createElement(
            _Subheader2.default,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 85
              },
              __self: this
            },
            'Content plugins'
          ) : null,
          content.map(function (plugin, k) {
            var initialState = plugin.createInitialState();

            return _react2.default.createElement(_Item2.default, {
              plugin: plugin,
              key: k,
              insert: {
                content: {
                  plugin: plugin,
                  state: initialState
                }
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 90
              },
              __self: _this2
            });
          })
        ),
        _react2.default.createElement(
          _List2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 103
            },
            __self: this
          },
          layout.length ? _react2.default.createElement(
            _Subheader2.default,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              },
              __self: this
            },
            'Layout plugins'
          ) : null,
          layout.map(function (plugin, k) {
            var initialState = plugin.createInitialState();
            var children = plugin.createInitialChildren();

            return _react2.default.createElement(_Item2.default, {
              plugin: plugin,
              key: k,
              insert: Object.assign({}, children, {
                layout: {
                  plugin: plugin,
                  state: initialState
                }
              }),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              },
              __self: _this2
            });
          })
        )
      );
    }
  }]);

  return Raw;
}(_react.Component);

var mapStateToProps = (0, _reselect.createStructuredSelector)({ isInsertMode: _display.isInsertMode });

var Decorated = (0, _reactRedux.connect)(mapStateToProps)(Raw);

var Toolbar = function (_Component2) {
  _inherits(Toolbar, _Component2);

  function Toolbar(props) {
    _classCallCheck(this, Toolbar);

    return _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, props));
  }

  _createClass(Toolbar, [{
    key: 'render',
    value: function render() {
      _react2.default.createElement(
        _Provider2.default,
        Object.assign({}, props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }),
        _react2.default.createElement(Decorated, Object.assign({}, props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        }))
      );
    }
  }]);

  return Toolbar;
}(_react.Component);

exports.default = Toolbar;
//# sourceMappingURL=index.js.map