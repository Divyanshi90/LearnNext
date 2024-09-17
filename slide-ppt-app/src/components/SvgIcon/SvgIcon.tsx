"use client"

import { Icon } from "semantic-ui-react";
import { CustomIconRef } from "./IconRef";
import classNames from "classnames";
import "./SvgIcon.scss";

export enum SVGType {
  SEMANTIC = "SEMANTIC",
  CUSTOM = "CUSTOM"
}

export interface Props {
  svgType: string;
  circular?: boolean;
  name: any;
  size?: any;
  baseclassname?: any;
  inverted?: boolean;
}

const SvgIcon = (props: Props) => {
  const { circular, name, size, baseclassname, inverted } = props;
  const CustomIcon = CustomIconRef[name];

  return props.svgType === "SEMANTIC" ? (
    <Icon
      circular={circular}
      name={name}
      size={size}
      className={baseclassname}
      inverted={inverted}
    />
  ) : (
    <div
      className={classNames(["custom-svg-icon", baseclassname, `${size}`], {
        circular: circular
      })}
    >
      {CustomIcon && <CustomIcon />}
    </div>
  );
};

export default SvgIcon;