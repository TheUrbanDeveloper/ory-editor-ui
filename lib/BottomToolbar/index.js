'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styles = require('material-ui/styles');

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BottomToolbar = function BottomToolbar(_ref) {
  var _ref$open = _ref.open,
      open = _ref$open === undefined ? false : _ref$open,
      children = _ref.children,
      className = _ref.className;
  return _react2.default.createElement(
    _styles.MuiThemeProvider,
    { theme: (0, _styles.createMuiTheme)() },
    _react2.default.createElement(
      _Drawer2.default,
      {
        className: className,
        anchor: "bottom",
        classes: { docked: docked },
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
            border: 'rgba(0, 0, 0, 0.87) 1px solid',
            borderRadius: '4px 4px 0',
            backgroundColor: 'rgba(0, 0, 0, 0.87)',
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