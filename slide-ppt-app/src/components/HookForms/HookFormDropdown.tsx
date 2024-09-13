import { Controller } from 'react-hook-form';
import { Dropdown } from 'semantic-ui-react';
import classNames from "classnames";
import { useI18n } from 'i18n';
import SvgIcon, { CUSTOM_SVG_ICON, SVGType } from 'components/SvgIcon';
import "./HookForms.scss";

export function HookFormDropdown(props: any) {
  const {translations} = useI18n();
  const {
    label,
    labelClassName,
    baseClassName,
    name,
    validation,
    control,
    errors,
    inputClassName,
    id,
    triggerOnChange,
    options,
    placeholder,
    defaultValue,
    showMessage
  } = props;

  const dropdownOptions = options?.map(({ label, value }: any, index: number) => ({
    key: value,
    text: label,
    value: value
  }));


  
  return (
    <div className={classNames(['ppt-flex ppt-flex-column ppt-flex-justify-center ppt-custom-input', baseClassName])}>
      {label && <label className={classNames([labelClassName])}>{label}</label>}
      {control && (
        <Controller
          control={control}
          name={name}
          rules={validation || {}}
          // defaultValue={defaultValue}
          render={({ field: { onChange, value, ref } }) => (
            <div className="ppt-flex-align-center ppt-margin-t-2 ppt-margin-b-3 ppt-position-relative ppt-dropdown-container">
              <Dropdown
                selection
                floating
                className={"width-100 ppt-dropdown"}
                value={value}
                placeholder={placeholder}
                id={id}
                options={dropdownOptions || [{}]}
                onChange={(event, data) => {
                  onChange(data.value);
                  if (typeof triggerOnChange === "function") {
                    triggerOnChange(data.value);
                  }
                }}
                icon={<SvgIcon name={CUSTOM_SVG_ICON.ArrowDown} svgType={SVGType.CUSTOM} size={"huge"} baseclassname={"ppt-text-primary-color"} />}
              />
            </div>
          )}
        />
      )}
      {errors[name] && (
        <div className="ppt-text-danger ppt-margin-t-1 ppt-margin-l-2">{errors[name].message}</div>
      )}
      { showMessage && defaultValue && (
        <div className="ppt-text-green-shade-1 ppt-margin-b-2 ppt-dropdown-message">
          {translations.LANG_CHNAGE_MSG} {defaultValue}
        </div>
      )}
    </div>
  );
}





