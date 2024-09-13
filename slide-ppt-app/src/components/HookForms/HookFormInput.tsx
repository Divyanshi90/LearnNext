import { Controller } from 'react-hook-form';
import classNames from "classnames";

import "./HookForms.scss";
import { Placeholder } from 'semantic-ui-react';
import { useI18n } from 'i18n';

export function HookFormInput(props: any) {
  const { translations } = useI18n();
  const {
    label,
    caption,
    labelClassName,
    captionClassName,
    baseClassName,
    name,
    validation,
    control,
    errors,
    placeholder,
    autoFocus,
    inputClassName,
    id,
    triggerOnChange,
    eventType,
    selectorString,
  } = props;
  return (
    <div className={classNames(['width-100 ppt-flex ppt-flex-column ppt-custom-input', baseClassName])}>
      {label && <div className={classNames([labelClassName])}>{label}</div>}
      {caption && <div className={classNames(["ppt-padding-b-2",captionClassName])}>{caption}</div>}
      {control && (
        <Controller
          control={control}
          name={name}
          rules={validation || {}}
          render={({ field: { onChange, value, ref } }) => (
            <div className="width-100 ppt-flex ppt-flex-align-center ppt-margin-t-2 ppt-textarea-container ppt-position-relative">
            <input
            placeholder={placeholder}
            autoFocus={autoFocus}
              value={value || ""}
              id={id}
              className={"width-100 ppt-background-blue-shade-6 ppt-text-grey-shade-2 ppt-padding-4"}
              onChange={(e) => {
                onChange(e.target.value);
                if(typeof triggerOnChange === "function") {
                  triggerOnChange(e.target.value, eventType, selectorString);
                }
              }}
            />
            </div>
          )}
        />
      )}
    {errors[name] && <div className='ppt-text-danger ppt-margin-t-1 ppt-margin-l-2'>{(translations as any)[errors[name].message] || errors[name].message}</div>}
    </div>
  );
}
