import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useContext } from 'react';
import classNames from 'classnames';
import './index.less';

var ProCardDivider = function ProCardDivider(props) {
  var _useContext = useContext(_ConfigProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = getPrefixCls('pro-card-divider');
  var className = props.className,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      children = props.children;
  var classString = classNames(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-line"), children === undefined));
  return /*#__PURE__*/React.createElement("div", {
    className: classString,
    style: style
  }, children);
};

export default ProCardDivider;