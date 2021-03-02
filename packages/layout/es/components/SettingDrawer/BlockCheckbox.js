import "antd/es/tooltip/style";
import _Tooltip from "antd/es/tooltip";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState, useEffect } from 'react';
import { CheckOutlined } from '@ant-design/icons';
import classNames from 'classnames';

var BlockCheckbox = function BlockCheckbox(_ref) {
  var value = _ref.value,
      configType = _ref.configType,
      onChange = _ref.onChange,
      list = _ref.list,
      prefixCls = _ref.prefixCls;
  var baseClassName = "".concat(prefixCls, "-drawer-block-checkbox");

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      dom = _useState2[0],
      setDom = _useState2[1];

  useEffect(function () {
    var domList = (list || []).map(function (item) {
      return /*#__PURE__*/React.createElement(_Tooltip, {
        title: item.title,
        key: item.key
      }, /*#__PURE__*/React.createElement("div", {
        className: classNames("".concat(baseClassName, "-item"), "".concat(baseClassName, "-item-").concat(item.key), "".concat(baseClassName, "-").concat(configType, "-item")),
        onClick: function onClick() {
          return onChange(item.key);
        }
      }, /*#__PURE__*/React.createElement(CheckOutlined, {
        className: "".concat(baseClassName, "-selectIcon"),
        style: {
          display: value === item.key ? 'block' : 'none'
        }
      })));
    });
    setDom(domList);
  }, [value, list === null || list === void 0 ? void 0 : list.length]);
  return /*#__PURE__*/React.createElement("div", {
    className: baseClassName,
    style: {
      minHeight: 42
    }
  }, dom);
};

export default BlockCheckbox;