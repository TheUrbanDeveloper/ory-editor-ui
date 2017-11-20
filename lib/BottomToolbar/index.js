'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _colors = require('material-ui/styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BottomToolbar = function BottomToolbar(_ref) {
  var _ref$open = _ref.open,
      open = _ref$open === undefined ? false : _ref$open,
      children = _ref.children,
      className = _ref.className;
  return _react2.default.createElement(
    _MuiThemeProvider2.default,
    { muiTheme: (0, _getMuiTheme2.default)() },
    _react2.default.createElement(
      _Drawer2.default,
      {
        className: className,
        open: open,
        docked: true,
        containerStyle: {
          top: 'inherit',
          bottom: '0px',
          height: 'auto',
          margin: '0 auto',
          left: '0',
          right: '0',
          width: 'auto',
          transform: 'translate(0, ' + (open ? '0' : '300px') + ')',
          textAlign: 'center',
          background: 'transparent',
          border: 'transparent',
          overflow: 'visible',
          boxShadow: 'none',
          zIndex: 5
        }
      },
      _react2.default.createElement(
        'div',
        {
          style: {
            display: 'inline-block',
            border: _colors.darkBlack + ' 1px solid',
            borderRadius: '4px 4px 0',
            backgroundColor: _colors.darkBlack,
            padding: '12px 24px'
          }
        },
        children
      )
    )
  );
};
exports.default = BottomToolbar;
//# sourceMappingURL=index.js.map