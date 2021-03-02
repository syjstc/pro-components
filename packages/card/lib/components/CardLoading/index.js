"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/col/style");

var _col = _interopRequireDefault(require("antd/es/col"));

var _react = _interopRequireDefault(require("react"));

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardLoading = function CardLoading(props) {
  var style = props.style,
      prefix = props.prefix;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "-loading-content"),
    style: style
  }, /*#__PURE__*/_react.default.createElement(_row.default, {
    gutter: 8
  }, /*#__PURE__*/_react.default.createElement(_col.default, {
    span: 22
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "-loading-block")
  }))), /*#__PURE__*/_react.default.createElement(_row.default, {
    gutter: 8
  }, /*#__PURE__*/_react.default.createElement(_col.default, {
    span: 8
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "-loading-block")
  })), /*#__PURE__*/_react.default.createElement(_col.default, {
    span: 15
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "-loading-block")
  }))), /*#__PURE__*/_react.default.createElement(_row.default, {
    gutter: 8
  }, /*#__PURE__*/_react.default.createElement(_col.default, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "-loading-block")
  })), /*#__PURE__*/_react.default.createElement(_col.default, {
    span: 18
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "-loading-block")
  }))), /*#__PURE__*/_react.default.createElement(_row.default, {
    gutter: 8
  }, /*#__PURE__*/_react.default.createElement(_col.default, {
    span: 13
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "-loading-block")
  })), /*#__PURE__*/_react.default.createElement(_col.default, {
    span: 9
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "-loading-block")
  }))), /*#__PURE__*/_react.default.createElement(_row.default, {
    gutter: 8
  }, /*#__PURE__*/_react.default.createElement(_col.default, {
    span: 4
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "-loading-block")
  })), /*#__PURE__*/_react.default.createElement(_col.default, {
    span: 3
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "-loading-block")
  })), /*#__PURE__*/_react.default.createElement(_col.default, {
    span: 16
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "-loading-block")
  }))));
};

var _default = CardLoading;
exports.default = _default;