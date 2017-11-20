'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
    props,
    _react2.default.createElement(
      'div',
      { className: 'ory-controls-mode-toggle-control-group' },
      _react2.default.createElement(
        'div',
        { className: 'ory-controls-mode-toggle-control' },
        _react2.default.createElement(_ToggleEdit2.default, null),
        _react2.default.createElement('div', { className: 'ory-controls-mode-toggle-clearfix' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'ory-controls-mode-toggle-control' },
        _react2.default.createElement(_ToggleInsert2.default, null),
        _react2.default.createElement('div', { className: 'ory-controls-mode-toggle-clearfix' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'ory-controls-mode-toggle-control' },
        _react2.default.createElement(_ToggleLayout2.default, null),
        _react2.default.createElement('div', { className: 'ory-controls-mode-toggle-clearfix' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'ory-controls-mode-toggle-control' },
        _react2.default.createElement(_ToggleResize2.default, null),
        _react2.default.createElement('div', { className: 'ory-controls-mode-toggle-clearfix' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'ory-controls-mode-toggle-control' },
        _react2.default.createElement(_TogglePreview2.default, null),
        _react2.default.createElement('div', { className: 'ory-controls-mode-toggle-clearfix' })
      )
    )
  );
};
exports.default = Inner;
//# sourceMappingURL=index.js.map