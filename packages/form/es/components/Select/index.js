function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import ProField from '@ant-design/pro-field';
import { runFunction } from '@ant-design/pro-utils';
import createField from '../../BaseForm/createField';
/**
 * 选择框
 *
 * @param
 */

var ProFormSelectComponents = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var fieldProps = _ref.fieldProps,
      children = _ref.children,
      params = _ref.params,
      proFieldProps = _ref.proFieldProps,
      mode = _ref.mode,
      valueEnum = _ref.valueEnum,
      request = _ref.request,
      showSearch = _ref.showSearch,
      options = _ref.options;
  return /*#__PURE__*/React.createElement(ProField, _extends({
    mode: "edit",
    valueEnum: runFunction(valueEnum),
    request: request,
    params: params,
    valueType: "select",
    fieldProps: _objectSpread({
      options: options,
      mode: mode,
      showSearch: showSearch
    }, fieldProps),
    ref: ref
  }, proFieldProps), children);
});
var SearchSelect = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var fieldProps = _ref2.fieldProps,
      children = _ref2.children,
      params = _ref2.params,
      proFieldProps = _ref2.proFieldProps,
      valueEnum = _ref2.valueEnum,
      request = _ref2.request,
      options = _ref2.options;

  var props = _objectSpread({
    options: options,
    mode: 'multiple',
    labelInValue: true,
    showSearch: true,
    showArrow: false,
    autoClearSearchValue: true,
    optionLabelProp: 'label',
    filterOption: false
  }, fieldProps);

  return /*#__PURE__*/React.createElement(ProField, _extends({
    mode: "edit",
    valueEnum: runFunction(valueEnum),
    request: request,
    params: params,
    valueType: "select",
    fieldProps: props,
    ref: ref
  }, proFieldProps), children);
});
var ProFormSelect = createField(ProFormSelectComponents, {
  customLightMode: true
});
ProFormSelect.SearchSelect = createField(SearchSelect, {
  customLightMode: true
});
export default ProFormSelect;