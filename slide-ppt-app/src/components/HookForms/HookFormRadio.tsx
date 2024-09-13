import { useMemo } from "react";
import classNames from "classnames";
import { Controller } from "react-hook-form";
import useScreenSize, { DEVICES } from "HOC/UseScreenSize";
import "./HookForms.scss";

export function HookFormRadio({ input, ...props }: any) {
  const device = useScreenSize();
  const { label, labelClassName, baseClassName, name, validation, control, errors, setValue, options, defaultValue, checkboxClassName, triggerOnChange } =
    props;

  const isDesktop = useMemo(() => {
    return device === DEVICES.DESKTOP;
  }, [device]);

  const Checkbox = ({ id, name, label, value, checked, onChange, baseClassName }: any) => {
    return (
      <div className={classNames(["ppt-flex ppt-flex-align-center custom-checkbox",{"ppt-margin-b-2":!isDesktop}, baseClassName])}>
        <div className={classNames(["ppt-flex ppt-flex-align-center ppt-flex-justify-center ppt-position-relative checkbox-input-container"])}>
          <input
            hidden
            type="checkbox"
            id={id}
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            className={classNames(["width-100 ppt-background-blue-shade-6 ppt-text-primary-color ppt-padding-4 ppt-input"])}
          />
        </div>
        <label htmlFor={id} className={classNames([{"ppt-margin-l-1 ppt-margin-r-4": isDesktop},{"ppt-margin-l-4": !isDesktop}])}>
          {label}
        </label>
      </div>
    );
  };

  return (
    <div
      className={classNames([
        "custom-checkBox-container",
        baseClassName,
        { "ppt-flex ppt-flex-align-center": isDesktop },
        { "ppt-flex ppt-flex-column width-100": !isDesktop },
      ])}
    >
      {control && (
        <Controller
          control={control}
          name={name}
          defaultValue={defaultValue}
          rules={validation || {}}
          render={({ field: { onChange, value, ref } }) => (
            <>
              {label && <div className={classNames([ { "ppt-margin-r-8": isDesktop },{ "": !isDesktop },labelClassName])}>{label}</div>}
              <div className={classNames(["ppt-flex",{"ppt-flex ppt-flex-column": !isDesktop}])}>
                {options.map((option: any, index: number) => (
                  <Checkbox
                    baseClassName={checkboxClassName || ""}
                    key={`checkbox${index}`}
                    id={`checkbox-${index}`}
                    name={name}
                    label={option.label}
                    value={option.value}
                    checked={value === option.value}
                    onChange={() => {
                      onChange(option.value)
                      if(typeof triggerOnChange === "function") {
                        triggerOnChange(option.value);
                      }
                    }}
                  />
                ))}
              </div>
            </>
          )}
        />
      )}
      {errors[name] && <div className="ppt-text-danger ppt-margin-t-1 ppt-margin-l-2">{errors[name].message}</div>}
    </div>
  );
}
