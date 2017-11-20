"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var source = {
  beginDrag: function beginDrag(_ref) {
    var insert = _ref.insert,
        props = _objectWithoutProperties(_ref, ["insert"]);

    props.layoutMode();
    return Object.assign({
      node: insert,
      rawNode: function rawNode() {
        return insert;
      }
    }, props);
  },
  endDrag: function endDrag(props, monitor) {
    var item = monitor.getItem();
    if (monitor.didDrop()) {
      setTimeout(function () {
        item.insertMode();
      }, 10);
      // If the item drop occurred deeper down the tree, don't do anything
      return;
    }

    item.clearHover();
    setTimeout(function () {
      item.insertMode();
    }, 100);
  }
};

exports.source = source;
var collect = exports.collect = function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    connectDragPreview: connect.dragPreview()
  };
};
//# sourceMappingURL=index.js.map