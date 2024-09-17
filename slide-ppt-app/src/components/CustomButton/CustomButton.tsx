"use client";
import { Button } from "semantic-ui-react";
import classnames from "classnames";
import { IconSizeProp } from "semantic-ui-react/dist/commonjs/elements/Icon/Icon";
import SvgIcon, { SVGType } from "@/components/SvgIcon";
import { useRouter } from "next/navigation";
import "./CustomButton.scss";

export enum ICON_POSITION {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

interface Props {
  type?: any;
  iconProps?: {
    svgType: "SEMANTIC" | "CUSTOM";
    circular?: boolean;
    name: any;
    size?: IconSizeProp;
    baseclassname?: any;
    inverted?: boolean;
  };
  iconPosition?: "LEFT" | "RIGHT";
  handleClick?: any;
  buttonText?: string;
  buttonTextClass?: any;
  baseclassname?: any;
  transparent?: boolean;
  primaryButton?: boolean;
  secondaryButton?: boolean;
  greyButton?: boolean;
  cancelButton?: boolean;
  blueOutlineButton?: boolean,
  gradientButton?: boolean;
  greyButton2?: boolean;
  outline?: boolean;
  noOutline?: boolean;
  noPadding?: boolean;
  noMargin?: boolean;
  circular?: boolean;
  round?: boolean;
  disabled?: boolean;
  id?: string;
  loading?: boolean;
  textSmall?: boolean;
  textBig?: boolean;
  textMedium?: boolean;
  textExtraSmall?: boolean;
  textAvg?: boolean;
  textInsertSlide?: boolean;
  whiteOutline?: boolean;
  path?: string;
}

const CustomButton = (props: Props) => {
  const router = useRouter()

  const {
    baseclassname,
    iconPosition,
    iconProps,
    handleClick,
    buttonText,
    buttonTextClass,
    transparent,
    primaryButton,
    secondaryButton,
    greyButton,
    cancelButton,
    gradientButton,
    greyButton2,
    blueOutlineButton,
    type,
    outline,
    noOutline,
    noPadding,
    noMargin,
    circular,
    round,
    disabled,
    id,
    loading,
    textSmall,
    textBig,
    textMedium,
    textExtraSmall,
    textAvg,
    textInsertSlide,
    whiteOutline,
    path
  } = props;


  const handleButtonClick = (event: any) => {
    if (typeof handleClick == 'function') {
      handleClick(event);
    }
  }

  const handleGenerateClick = () => {
    if (path)
      router.push(path);
  };

  return (
    <div className={classnames(["ppt-button-border"], {
      "primary-button": primaryButton, "disabled": disabled,
    }, baseclassname)}>
      <Button
        id={id}
        loading={!!loading}
        className={classnames([
          "ppt-customButton",
          {
            "primary-button": primaryButton,
            "secondary-button": secondaryButton,
            "grey-button": greyButton,
            "cancel-button": cancelButton,
            "gradient-button": gradientButton,
            "grey-button-2": greyButton2,
            "blueOutline-button": blueOutlineButton,
            "no-button-background": transparent,
            "outline": outline,
            "icon-only": !buttonText,
            "no-outline": noOutline,
            "no-padding": noPadding,
            "no-margin": noMargin,
            "circular": circular,
            "round": round,
            "disabled": disabled,
            "text-small": textSmall,
            "text-big": textBig,
            "text-medium": textMedium,
            "textExtra-small": textExtraSmall,
            "text-avg": textAvg,
            "text-insert-slide": textInsertSlide,
            "white-outline": whiteOutline
          },

        ])}
        onClick={path ? handleGenerateClick : handleButtonClick}
        type={type || "button"}
        disabled={disabled}
      >
        <div className="ppt-flex ppt-flex-row ppt-flex-justify-center ppt-flex-align-center width-100 height-100">
          {iconProps && iconPosition === ICON_POSITION.LEFT && (
          <SvgIcon baseclassname={classnames([{'ppt-margin-r-2': !!buttonText}])} {...iconProps}/>
        )}
          {buttonText && (
            <span
              className={classnames(["ppt-text-primary-color", { "ppt-visibility-hide": loading },
                buttonTextClass
              ])}
            >
              {buttonText}
            </span>
          )}
          {iconProps && iconPosition === ICON_POSITION.RIGHT && (
          <SvgIcon baseclassname={classnames([{'ppt-margin-l-2': !!buttonText}])} {...iconProps}/>
        )}
        </div>
      </Button>
    </div>
  );
};

export default CustomButton;
