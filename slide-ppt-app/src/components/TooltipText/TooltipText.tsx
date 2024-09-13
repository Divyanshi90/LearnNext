import { MutableRefObject, useRef, useEffect, useState } from "react";
import { Popup } from "semantic-ui-react";
import "./TooltipText.scss";
import classNames from "classnames";

interface Props {
  value: string;
  baseClassName?: string;
}

export default ({ value, baseClassName }: Props) => {
  const tootipRef: MutableRefObject<HTMLDivElement> = useRef(null!);
  const [hideTooltip, setHideTooltip] = useState<boolean>(true);


  useEffect(() => {
    if((tootipRef?.current?.scrollWidth > tootipRef?.current?.clientWidth) && hideTooltip) {
      setHideTooltip(false);
    }
  }, [tootipRef, value])



  return (
    <Popup
      content={value}
      disabled={hideTooltip}
      trigger={<div className={classNames(["ppt-tooltip-text", baseClassName || ""])} ref={tootipRef}>{value}</div>}
    />
  );
}