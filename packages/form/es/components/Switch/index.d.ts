import React from 'react';
import type { SwitchProps } from 'antd';
import type { ProFormItemProps } from '../../interface';
export declare type ProFormSwitchProps = ProFormItemProps<SwitchProps> & {
    checkedChildren?: SwitchProps['checkedChildren'];
    unCheckedChildren?: SwitchProps['unCheckedChildren'];
};
declare const _default: React.ComponentType<Pick<{
    fieldProps?: (import("../../interface").FieldProps & SwitchProps) | undefined;
    placeholder?: string | string[] | undefined;
    secondary?: boolean | undefined;
    allowClear?: boolean | undefined;
    disabled?: boolean | undefined;
    width?: number | "sm" | "md" | "xl" | "xs" | "lg" | undefined;
    proFieldProps?: {
        light?: boolean | undefined;
        label?: React.ReactNode;
        mode?: "read" | undefined;
    } | undefined;
} & import("antd").FormItemProps<any> & {
    checkedChildren?: React.ReactNode;
    unCheckedChildren?: React.ReactNode;
} & import("../../BaseForm/createField").ExtendsProps, "children" | "label" | "style" | "valuePropName" | "id" | "disabled" | "className" | "placeholder" | "bordered" | "prefixCls" | "name" | "rules" | "initialValue" | "hidden" | "onReset" | "tooltip" | "dependencies" | "getValueFromEvent" | "normalize" | "shouldUpdate" | "trigger" | "validateTrigger" | "validateFirst" | "getValueProps" | "messageVariables" | "preserve" | "isListField" | "isList" | "required" | "width" | "htmlFor" | "secondary" | "allowClear" | "colSize" | "params" | "ignoreFormItem" | "readonly" | "transform" | "formItemProps" | "fieldProps" | "noStyle" | "hasFeedback" | "validateStatus" | "fieldKey" | "colon" | "labelAlign" | "labelCol" | "requiredMark" | "wrapperCol" | "help" | "extra" | "status" | "checkedChildren" | "unCheckedChildren">>;
export default _default;
