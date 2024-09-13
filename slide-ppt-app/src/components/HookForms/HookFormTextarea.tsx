import { Controller } from "react-hook-form";
import classNames from "classnames";
import "./HookForms.scss";

export function HookFormTextarea(props: any) {
  const { label, caption, labelClassName, captionClassName, baseClassName, name, validation, control, errors, id, rows, placeholder, disableResize } = props;

  return (
    <div className={classNames(["width-100 ppt-flex ppt-flex-column ppt-custom-input", { "no-resize": disableResize }, baseClassName])}>
      {label && <div className={classNames([labelClassName])}>{label}</div>}
      {caption && <div className={classNames(["ppt-padding-b-2", captionClassName])}>{caption}</div>}
      {control && (
        <Controller
          control={control}
          name={name}
          rules={validation || {}}
          render={({ field: { onChange, value, ref } }) => (
            <div className="width-100 ppt-flex ppt-flex-align-center ppt-margin-t-2 ppt-textarea-container ppt-position-relative">
              <textarea
                value={value || ""}
                rows={rows}
                id={id}
                placeholder={placeholder}
                onChange={(e) => {
                  onChange(e.target.value);
                }}
                className="width-100 ppt-background-blue-shade-6 ppt-text-grey-shade-2 ppt-padding-4"
              />
              {!disableResize && (
                <div className="extra-line-container">
                  <div className="extra-line"></div>
                  <div className="extra-line1"></div>
                </div>
              )}
            </div>
          )}
        />
      )}
      {errors[name] && <div className="ppt-text-danger ppt-margin-t-1 ppt-margin-l-2">{errors[name].message}</div>}
    </div>
  );
}
