'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/DisplayModeToggle/index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Provider = require('../Provider');

var _Provider2 = _interopRequireDefault(_Provider);

var _ToggleEdit = require('./ToggleEdit');

var _ToggleEdit2 = _interopRequireDefault(_ToggleEdit);

var _ToggleInsert = require('./ToggleInsert');

var _ToggleInsert2 = _interopRequireDefault(_ToggleInsert);

var _ToggleLayout = require('./ToggleLayout');

var _ToggleLayout2 = _interopRequireDefault(_ToggleLayout);

var _TogglePreview = require('./TogglePreview');

var _TogglePreview2 = _interopRequireDefault(_TogglePreview);

var _ToggleResize = require('./ToggleResize');

var _ToggleResize2 = _interopRequireDefault(_ToggleResize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Inner = function Inner(props) {
  return _react2.default.createElement(
    _Provider2.default,
    Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: undefined
    }),
    _react2.default.createElement(
      'div',
      { className: 'ory-controls-mode-toggle-control-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: undefined
      },
      _react2.default.createElement(
        'div',
        { className: 'ory-controls-mode-toggle-control', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: undefined
        },
        _react2.default.createElement(_ToggleEdit2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: undefined
        }),
        _react2.default.createElement('div', { className: 'ory-controls-mode-toggle-clearfix', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: undefined
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'ory-controls-mode-toggle-control', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: undefined
        },
        _react2.default.createElement(_ToggleInsert2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: undefined
        }),
        _react2.default.createElement('div', { className: 'ory-controls-mode-toggle-clearfix', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: undefined
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'ory-controls-mode-toggle-control', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: undefined
        },
        _react2.default.createElement(_ToggleLayout2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: undefined
        }),
        _react2.default.createElement('div', { className: 'ory-controls-mode-toggle-clearfix', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: undefined
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'ory-controls-mode-toggle-control', __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: undefined
        },
        _react2.default.createElement(_ToggleResize2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: undefined
        }),
        _react2.default.createElement('div', { className: 'ory-controls-mode-toggle-clearfix', __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: undefined
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'ory-controls-mode-toggle-control', __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: undefined
        },
        _react2.default.createElement(_TogglePreview2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: undefined
        }),
        _react2.default.createElement('div', { className: 'ory-controls-mode-toggle-clearfix', __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: undefined
        })
      )
    )
  );
};

exports.default = Inner;
//# sourceMappingURL=index.js.map