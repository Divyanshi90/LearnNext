import React from 'react';
import classNames from 'classnames';
import { CUSTOM_SVG_ICON, SVGType } from '@/components/SvgIcon';
import CustomButton, { ICON_POSITION } from '@/components/CustomButton/CustomButton';

import "./styles.scss";

interface ILayout {
  header: any;
  children: any;
  baseClassName?: any;
  headerClassName?: any;
  contentClassName?: any;
  handleBackClick?: () => void;
  backDisabled?:boolean;
  enableHeight?: boolean;
//   generate: React.ReactNode;
}

function LayoutComponent({ header, children, baseClassName, contentClassName, handleBackClick, backDisabled, enableHeight  }: ILayout) {
//   const {translations} = useI18n();
  return (
    <div className={classNames(['width-100 ppt-layout-container', {"ppt-layout-container-exact": enableHeight}],  baseClassName)}>
      <div className={classNames(['ppt-flex ppt-flex-row ppt-flex-align-center ppt-flex-justify-between width-100 ppt-background-black-shade ppt-layout-header'])}>
        {/* {handleBackClick &&  */}
          <CustomButton
            buttonText={"Back"}
            handleClick={handleBackClick}
            iconProps={{
              svgType: "CUSTOM",
              name: CUSTOM_SVG_ICON.SmallLeftArrow,
              size: "huge",
            }}
            iconPosition="LEFT"
            transparent
            greyButton
            noOutline
            noPadding
            disabled={backDisabled}
          />
        {/* } */}
        {header}
      </div>
      <div className={classNames(['width-100 ppt-layout-content'], contentClassName)}>
        {children}
        {/* {generate} */}
      </div>
    </div>
  )
}

export default LayoutComponent