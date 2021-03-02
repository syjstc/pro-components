import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/col/style";
import _Col from "antd/es/col";
import React from 'react';
import './index.less';

var CardLoading = function CardLoading(props) {
  var style = props.style,
      prefix = props.prefix;
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-loading-content"),
    style: style
  }, /*#__PURE__*/React.createElement(_Row, {
    gutter: 8
  }, /*#__PURE__*/React.createElement(_Col, {
    span: 22
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-loading-block")
  }))), /*#__PURE__*/React.createElement(_Row, {
    gutter: 8
  }, /*#__PURE__*/React.createElement(_Col, {
    span: 8
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-loading-block")
  })), /*#__PURE__*/React.createElement(_Col, {
    span: 15
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-loading-block")
  }))), /*#__PURE__*/React.createElement(_Row, {
    gutter: 8
  }, /*#__PURE__*/React.createElement(_Col, {
    span: 6
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-loading-block")
  })), /*#__PURE__*/React.createElement(_Col, {
    span: 18
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-loading-block")
  }))), /*#__PURE__*/React.createElement(_Row, {
    gutter: 8
  }, /*#__PURE__*/React.createElement(_Col, {
    span: 13
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-loading-block")
  })), /*#__PURE__*/React.createElement(_Col, {
    span: 9
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-loading-block")
  }))), /*#__PURE__*/React.createElement(_Row, {
    gutter: 8
  }, /*#__PURE__*/React.createElement(_Col, {
    span: 4
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-loading-block")
  })), /*#__PURE__*/React.createElement(_Col, {
    span: 3
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-loading-block")
  })), /*#__PURE__*/React.createElement(_Col, {
    span: 16
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-loading-block")
  }))));
};

export default CardLoading;