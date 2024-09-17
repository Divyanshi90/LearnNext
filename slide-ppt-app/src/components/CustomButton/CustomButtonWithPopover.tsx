import { Button, Popup } from "semantic-ui-react";
// import SvgIcon, { SVGType } from "components/SvgIcon";
import { IconSizeProp } from "semantic-ui-react/dist/commonjs/elements/Icon/Icon";
import classnames from "classnames";
import "./CustomButton.scss";
import { Fragment } from "react";

export enum ICON_POSITION {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

interface Props {
  type?: any;
  iconProps?: {
    // svgType: SVGType;
    circular?: boolean;
    name: any;
    size?: IconSizeProp;
    baseclassname?: any;
    inverted?: boolean;
  };
  iconPosition?: ICON_POSITION;
  handleClick?: any;
  buttonText?: string;
  buttonTextClass?: any;
  baseclassname?: any;
  transparent?: boolean;
  primaryButton?: boolean;
  secondaryButton?: boolean;
  greyButton?: boolean;
  outline?: boolean;
  noOutline?: boolean;
  noPadding?: boolean;
  popupContent: any;
  popupBaseClass?: any;
  round?: boolean;
  circular?: boolean;
  disabled?: boolean;
  openPopup?: any;
  textMedium?:boolean;
}

const CustomButtonWithPopover = (props: Props) => {
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
    type,
    outline,
    noOutline,
    noPadding,
    popupContent,
    popupBaseClass,
    round,
    circular,
    disabled,
    openPopup,
    textMedium
  } = props;

  const handleButtonClick = (event: any) => {
    if (typeof handleClick == 'function') {
      handleClick(event);
    }
  }

  return (<Fragment>
    <Popup content={popupContent}
    basic
    wide
    size="large"
    open={openPopup}
    position="bottom right"
    className={classnames(["button-popover", popupBaseClass || ""])}
    trigger={
      <Button
        className={classnames([
          "ppt-customButton",
          {
            "primary-button": primaryButton,
            "secondary-button": secondaryButton,
            "grey-button": greyButton,
            "no-button-background": transparent,
            "outline": outline,
            "icon-only": !buttonText,
            "no-outline": noOutline,
            "no-padding": noPadding,
            "round": round,
            "circular": circular,
            "disabled": disabled,
            "text-medium": textMedium
          },
          baseclassname,
        ])}
        onClick={handleButtonClick}
        type={type || "button"}
      >
        <div className="ppt-flex ppt-flex-row ppt-flex-justify-center ppt-flex-align-center height-100">
          {/* {iconProps && iconPosition === ICON_POSITION.LEFT && (
            <SvgIcon baseclassname={classnames([{ 'ppt-margin-r-2': !!buttonText }])} {...iconProps} />
          )} */}
          {buttonText && (
            <span
              className={classnames([
                buttonTextClass
              ])}
            >
              {buttonText}
            </span>
          )}
          {/* {iconProps && iconPosition === ICON_POSITION.RIGHT && (
            <SvgIcon baseclassname={classnames([{ 'ppt-margin-l-2': !!buttonText }])} {...iconProps} />
          )} */}
        </div>
      </Button>
    }
    />
  </Fragment>
  )
};

export default CustomButtonWithPopover;
