import classNames from "classnames";
import Image from "next/image";
import { Fragment } from "react";
import heroPic from "../../public/images/HeroImage.png";
import unionPic from "../../public/images/Union2.png";
import unionPic1 from "../../public/images/Union1.png";
import CustomButton from "@/components/CustomButton";
import { URLRoutes } from "@/URLRoutes";

export default function Home() {
  // const router = useRouter();

  console.log("Page Rendered")
  // const handleGenerateClick = () => {
  //   router.push(URLRoutes.clients.generate);
  // };
  // const FAQDetails = () => {

  //   return [
  //       {

  //         title: translations.HOME_FAQ_QUES_1,
  //         ans: translations.HOME_FAQ_ANS_1
  //       },
  //       {

  //         title:translations.HOME_FAQ_QUES_2,
  //         ans: translations.HOME_FAQ_ANS_2
  //       },
  //       {

  //         title: translations.HOME_FAQ_QUES_3,
  //         ans: translations.HOME_FAQ_ANS_3
  //       },
  //       {
  //         title: translations.HOME_FAQ_QUES_4,
  //         ans: translations.HOME_FAQ_ANS_4
  //       },
  //       {
  //         title: translations.HOME_FAQ_QUES_5,
  //         ans: translations.HOME_FAQ_ANS_5
  //       },
  //       {
  //         title: translations.HOME_FAQ_QUES_6,
  //         ans: translations.HOME_FAQ_ANS_6
  //       },
  //       {
  //         title: translations.HOME_FAQ_QUES_7,
  //         ans: translations.HOME_FAQ_ANS_7
  //       },
  //       {
  //         title: translations.HOME_FAQ_QUES_8,
  //         ans: translations.HOME_FAQ_ANS_8
  //       },
  //       {
  //         title: translations.HOME_FAQ_QUES_9,
  //         ans: translations.HOME_FAQ_ANS_9
  //       },
  //       {
  //         title:translations.HOME_FAQ_QUES_10,
  //         ans: translations.HOME_FAQ_ANS_10
  //       },


  //     ];
  //   };
  return (
    <Fragment>
      <div className="ppt-flex ppt-flex-column ppt-flex-justify-center ppt-flex-align-center width-100 ppt-position-relative ppt-section1">

        {/* <div className={classNames(["ppt-position-absolute ppt-section1-bg-ellipses width-85"])}>
          <img src={device === DEVICES.DESKTOP ? `${CONFIG.REACT_APP_ASSETS_URL}/images/Ellipses.png` : `${CONFIG.REACT_APP_ASSETS_URL}/images/Group3.png`} className="width-100 height-100 " alt="Ellipses" />
          <SvgIcon
                name={CUSTOM_SVG_ICON.GradientCircle}
                svgType={SVGType.CUSTOM}
                size={"large"}
                baseclassname={"ppt-position-absolute ppt-section1-gradientCircle"}
              />
               <SvgIcon
                name={CUSTOM_SVG_ICON.Triangle}
                svgType={SVGType.CUSTOM}
                size={"large"}
                baseclassname={"ppt-position-absolute ppt-section1-triangle"}
              />
        </div> */}
        <div
          className={classNames(
            ["width-80 ppt-flex ppt-flex-column ppt-flex-justify-center ppt-flex-align-center  ppt-section1-banner-container"],
            // { "width-80": device === DEVICES.DESKTOP },
            // { "width-90": device !== DEVICES.DESKTOP }
          )}
        >
          <h1 className="ppt-h1 ppt-text-primary-color ppt-text-align-center ppt-section1-text1">{"Create a"}<span className="ppt-text-gradient-color-1"> {"Stunning Presentation"}</span>{"in Minutes"}</h1>
          <h1 className="ppt-h1 ppt-text-primary-color ppt-section1-text2">{"Powered by AI"}</h1>
          <div className="ppt-text-grey-color ppt-margin-b-10 ppt-text-align-center ppt-section1-text3">{"The world's most advanced AI, trained on a diverse array of content and designs, crafts the perfect presentation for you."}</div>
          <CustomButton
            // type="submit"
            buttonText={"Create a Presentation Now"}
            gradientButton
            circular
            path={URLRoutes.clients.generate}
            textBig
          />
          <Image src={heroPic || "/images/HeroImage.png"} className={classNames(["width-100 height-100"])} alt="HeroImage" />

        </div>
        <Image
          src={unionPic}
          className="ppt-position-absolute ppt-section1-union2-image"
          alt="Union2"
        />
      </div>

      <Fragment>
        <div className="ppt-position-relative">
          <Image src={unionPic1} className="ppt-position-absolute ppt-section2-union1-image" alt="Union1" />
        </div>
        <div className="ppt-flex ppt-flex-row ppt-flex-justify-center width-100 ppt-text-primary-color ppt-padding-25">
          <div className="ppt-flex ppt-flex-column ppt-flex-justify-center ppt-position-relative ppt-section2-left-container">
            <h2 className="ppt-h2 ppt-section2-text1 ppt-text-gradient-color-1">{"Game Changing"}</h2>
            <h2 className="ppt-h2 ppt-section2-text2">{"Approach to Storytelling in Powerpoint"}</h2>
            <CustomButton
              type="submit"
              buttonText={"Try Now"}
              gradientButton
              circular
              textBig
              // handleClick={handleClick}
              baseclassname={"ppt-margin-t-4"}
            />
          </div>
          <div className="ppt-flex ppt-flex-column ppt-padding-l-3 ppt-section2-right-container">
            <div className="ppt-section2-text3 ppt-text-align-center">{"Why we are different"}</div>
            {/* <div className="ppt-flex ppt-flex-row ppt-flex-justify-between ppt-flex-wrap ">{cardDetails.map(renderCards)}</div> */}
          </div>
        </div>
        <div className="ppt-position-relative width-100 ppt-section3 ppt-section3-desktop">
          <div className="ppt-flex ppt-flex-column  ppt-section3-text">
            <h2 className="ppt-h2 ppt-section3-text1">
              {"Craft impactful"} <span className="ppt-section3-text3 ppt-text-gradient-color-1">{'Presentations Effortlessly'} </span>
              {"with our AI tool"}
            </h2>
            <div className="ppt-section3-text2">{"AI-powered tool for crafting pitch decks with advanced algorithms that enhance presentation quality and increase success chances."}</div>
            <div className="width-100 ppt-border-bottom ppt-border-grey-color ppt-margin-b-8"></div>
          </div>
        </div>
      </Fragment>

      <div className="width-100 ppt-text-primary-color ppt-flex  ppt-flex-column ppt-flex-justify-center ppt-flex-align-center ppt-section4">
        <h2 className="ppt-h2 ppt-text-gradient-color-1 ppt-margin-b-15 ppt-text-align-center ppt-section4-heading">
          Frequently asked Questions
        </h2>
        <div className={classNames(
          ["ppt-flex ppt-flex-column ppt-section4-FAQ width-80"],
        )}>
          {/* {FAQDetails.map(renderFAQ)} */}
        </div>
      </div>
    </Fragment>
  );
}
