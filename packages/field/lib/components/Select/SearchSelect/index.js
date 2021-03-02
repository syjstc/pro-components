"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));

require("antd/es/select/style");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Option = _select.default.Option;

var SearchSelect = function SearchSelect(props, ref) {
  var optionItemRender = props.optionItemRender,
      mode = props.mode,
      onSearch = props.onSearch,
      _onFocus = props.onFocus,
      _onChange = props.onChange,
      _props$searchOnFocus = props.searchOnFocus,
      searchOnFocus = _props$searchOnFocus === void 0 ? false : _props$searchOnFocus,
      _props$resetAfterSele = props.resetAfterSelect,
      resetAfterSelect = _props$resetAfterSele === void 0 ? false : _props$resetAfterSele,
      className = props.className,
      disabled = props.disabled,
      options = props.options,
      fetchData = props.fetchData,
      resetData = props.resetData,
      customizePrefixCls = props.prefixCls,
      restProps = _objectWithoutProperties(props, ["optionItemRender", "mode", "onSearch", "onFocus", "onChange", "searchOnFocus", "resetAfterSelect", "className", "disabled", "options", "fetchData", "resetData", "prefixCls"]);

  var _useContext = (0, _react.useContext)(_configProvider.default.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = getPrefixCls('pro-filed-search-select', customizePrefixCls); // 兼容 renderXXX API。

  var classString = (0, _classnames.default)(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-disabled"), disabled));

  var getMergeValue = function getMergeValue(value, option) {
    // 聚合数据传递给上游消费
    if (mode === 'multiple' && Array.isArray(value) && value.length > 0) {
      // 多选情况且用户有选择
      return value.map(function (item, index) {
        var optionItem = option === null || option === void 0 ? void 0 : option[index];
        var dataItem = (optionItem === null || optionItem === void 0 ? void 0 : optionItem['data-item']) || {};
        return _objectSpread(_objectSpread({}, dataItem), item);
      });
    } // 单选情况且用户选择了选项


    var dataItem = option && option['data-item'] || {};
    return _objectSpread(_objectSpread({}, dataItem), value);
  };

  return /*#__PURE__*/_react.default.createElement(_select.default, _extends({
    ref: ref,
    className: classString,
    allowClear: true,
    disabled: disabled,
    mode: mode
  }, restProps, {
    onSearch: (restProps === null || restProps === void 0 ? void 0 : restProps.showSearch) ? function (value) {
      fetchData(value);
      onSearch === null || onSearch === void 0 ? void 0 : onSearch(value);
    } : undefined,
    onChange: function onChange(value, optionList) {
      for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        rest[_key - 2] = arguments[_key];
      }

      if (!props.labelInValue || mode !== 'multiple') {
        _onChange === null || _onChange === void 0 ? void 0 : _onChange.apply(void 0, [value, optionList].concat(rest));
        return;
      } // 合并值


      var mergeValue = getMergeValue(value, optionList);
      _onChange === null || _onChange === void 0 ? void 0 : _onChange.apply(void 0, [mergeValue, optionList].concat(rest)); // 将搜索结果置空，重新搜索

      if (resetAfterSelect) resetData();
    },
    onFocus: function onFocus(e) {
      if (searchOnFocus) {
        fetchData('');
      }

      _onFocus === null || _onFocus === void 0 ? void 0 : _onFocus(e);
    }
  }), (options || []).map(function (item) {
    var label = item.label,
        value = item.value,
        itemDisable = item.disabled,
        itemClassName = item.className;
    return /*#__PURE__*/_react.default.createElement(Option, _extends({}, item, {
      value: value,
      key: value,
      disabled: itemDisable,
      "data-item": item,
      className: "".concat(prefixCls, "-option ").concat(itemClassName || ''),
      label: item.label
    }), (optionItemRender === null || optionItemRender === void 0 ? void 0 : optionItemRender(item)) || label);
  }));
};

var _default = /*#__PURE__*/_react.default.forwardRef(SearchSelect);

exports.default = _default;