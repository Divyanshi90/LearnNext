"use client"


import useScreenSize, { DEVICES } from  "../utils/useScreenSize"
import classNames from "classnames";
import Image from "next/image";
import { Fragment } from "react";

export default function Home() {

  const device = useScreenSize();
  return (
    <Fragment>
    <div className="ppt-flex ppt-flex-column ppt-flex-justify-center ppt-flex-align-center width-100 ppt-position-relative ppt-section1">
      <div className={classNames(["ppt-position-absolute ppt-section1-bg-ellipses width-80"])}>
        <Image src={"/images/HeroImage.png"} className="width-100 height-100" alt="Ellipses" />
      </div>

      <div
        className={classNames(
          ["ppt-flex ppt-flex-column ppt-flex-justify-center ppt-flex-align-center  ppt-section1-banner-container"],
          { "width-80": device === DEVICES.DESKTOP },
          { "width-90": device !== DEVICES.DESKTOP }
        )}
      >
        <h1 className="ppt-h1 ppt-text-primary-color ppt-text-align-center ppt-section1-text1">{"Create a"}<span className="ppt-text-gradient-color-1"> {"Stunning Presentation"}</span>{"in Minutes"}</h1>
        <h1 className="ppt-h1 ppt-text-primary-color ppt-section1-text2">{"Powered by AI"}</h1>
        <div className="ppt-text-grey-color ppt-margin-b-10 ppt-text-align-center ppt-section1-text3">{"The world's most advanced AI, trained on a diverse array of content and designs, crafts the perfect presentation for you."}</div>

        <Image src={"/images/HeroImage.png"} className={classNames(["width-100 height-100"])} alt="HeroImage" />
     
      </div>
     {device === DEVICES.DESKTOP &&
      <Image
        src={"/images/Union2.png"}
        width={500}
        height={500}
        className="ppt-position-absolute ppt-section1-union2-image"
        alt="Union2"
      />
      }
    </div>
    </Fragment>
  );
}
