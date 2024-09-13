import classNames from "classnames";
import { Controller } from "react-hook-form";
import FileController from "./FileController";
import { useI18n } from "i18n";

export default function HookFormFileUploader(props: any) {
  const {translations} = useI18n();
  const {
    control,
    errors,
    name,
    label,
    baseClassName,
    labelClassName,
    validation,
    defaultValue
  } = props;

  return (
    <div className={classNames(["ppt-flex ppt-flex-column ppt-custom-input", baseClassName])}>
      {label && <div className={classNames([labelClassName])}>{label}</div>}
      {control && (
        <Controller
          control={control}
          name={name}
          defaultValue={defaultValue}
          rules={validation || {}}
          render={({ field }) => (
            <FileController field={field} {...props}/>
          )}
        />
      )}
      {errors[name] && <div className="ppt-text-danger ppt-margin-l-2 ppt-margin-t-1">{(translations as any)[errors[name].message]|| errors[name].message}</div>}
    </div>
  );
}

