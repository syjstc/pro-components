"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/select/style");

var _select = _interopRequireDefault(require("antd/es/select"));

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));

var _react = _interopRequireWildcard(require("react"));

var _icons = require("@ant-design/icons");

var _classnames = _interopRequireDefault(require("classnames"));

var _proUtils = require("@ant-design/pro-utils");

require("./index.less");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * 如果有 label 就优先使用 label
 *
 * @param valueMap
 * @param v
 */
var getValueOrLabel = function getValueOrLabel(valueMap, v) {
  if (_typeof(v) !== 'object') {
    return valueMap[v] || v;
  }

  return valueMap[v === null || v === void 0 ? void 0 : v.value] || v.label;
};

var LightSelect = function LightSelect(props, ref) {
  var label = props.label,
      customizePrefixCls = props.prefixCls,
      _onChange = props.onChange,
      value = props.value,
      mode = props.mode,
      children = props.children,
      defaultValue = props.defaultValue,
      size = props.size,
      showSearch = props.showSearch,
      disabled = props.disabled,
      style = props.style,
      className = props.className,
      bordered = props.bordered,
      options = props.options,
      onSearch = props.onSearch,
      allowClear = props.allowClear,
      labelInValue = props.labelInValue,
      restProps = _objectWithoutProperties(props, ["label", "prefixCls", "onChange", "value", "mode", "children", "defaultValue", "size", "showSearch", "disabled", "style", "className", "bordered", "options", "onSearch", "allowClear", "labelInValue"]);

  var _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? label : _props$placeholder;

  var _useContext = (0, _react.useContext)(_configProvider.default.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = getPrefixCls('pro-field-select-light-select');

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      keyword = _useState4[0],
      setKeyword = _useState4[1];

  var valueMap = (0, _react.useMemo)(function () {
    var values = {};
    options === null || options === void 0 ? void 0 : options.forEach(function (_ref) {
      var aLabel = _ref.label,
          aValue = _ref.value;
      values[aValue] = aLabel || aValue;
    });
    return values;
  }, [options]);
  var filterValue = Array.isArray(value) ? value.map(function (v) {
    return getValueOrLabel(valueMap, v);
  }) : getValueOrLabel(valueMap, value);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(prefixCls, _defineProperty({}, "".concat(prefixCls, "-searchable"), showSearch), className),
    style: style,
    onClick: function onClick() {
      if (!disabled) {
        setOpen(true);
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_select.default, _extends({}, restProps, {
    allowClear: allowClear,
    value: value,
    mode: mode,
    labelInValue: labelInValue,
    size: size,
    disabled: disabled,
    onChange: function onChange(v, option) {
      if (_onChange) {
        _onChange(v, option);
      }

      if (mode !== 'multiple') {
        setTimeout(function () {
          setOpen(false);
        }, 0);
      }
    },
    bordered: bordered,
    showSearch: showSearch,
    onSearch: onSearch,
    style: style,
    dropdownRender: function dropdownRender(menuNode) {
      return /*#__PURE__*/_react.default.createElement("div", {
        ref: ref
      }, showSearch && /*#__PURE__*/_react.default.createElement("div", {
        style: {
          margin: '4px 8px'
        }
      }, /*#__PURE__*/_react.default.createElement(_input.default, {
        value: keyword,
        allowClear: allowClear,
        onChange: function onChange(e) {
          setKeyword(e.target.value.toLowerCase());
          onSearch === null || onSearch === void 0 ? void 0 : onSearch(e.target.value);
        },
        onKeyDown: function onKeyDown(e) {
          // 避免按下删除键把选项也删除了
          e.stopPropagation();
        },
        style: {
          width: '100%'
        },
        prefix: /*#__PURE__*/_react.default.createElement(_icons.SearchOutlined, null)
      })), menuNode);
    },
    open: open,
    onDropdownVisibleChange: setOpen,
    prefixCls: customizePrefixCls,
    options: keyword ? options === null || options === void 0 ? void 0 : options.filter(function (o) {
      return String(o.label).toLowerCase().includes(keyword) || o.value.toLowerCase().includes(keyword);
    }) : options
  })), /*#__PURE__*/_react.default.createElement(_proUtils.FieldLabel, {
    ellipsis: true,
    size: size,
    label: label,
    placeholder: placeholder,
    disabled: disabled,
    expanded: open,
    bordered: bordered,
    allowClear: allowClear,
    value: filterValue || (value === null || value === void 0 ? void 0 : value.label) || value,
    onClear: function onClear() {
      _onChange === null || _onChange === void 0 ? void 0 : _onChange(undefined, undefined);
    }
  }));
};

var _default = /*#__PURE__*/_react.default.forwardRef(LightSelect);

exports.default = _default;