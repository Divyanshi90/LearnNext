import classNames from "classnames";
import plusImage from "../../../public/images/Plus.png";
import minusImage from "../../../public/images/Minus.png";
import "./style.scss";
import Image from "next/image";


interface Props {
  title: string;
  ans: any;
  showItems: any;
  showIndex: any;
}

function ExpandCollaps({ title, ans, showItems, showIndex }: Props) {

  const handleToggle = () => {
    showIndex();
  };

  return (
    <div className="ppt-faq-container ppt-border-bottom ppt-border-grey-color ppt-padding-7">
      <div className="ppt-flex ppt-flex-row ppt-flex-justify-between ppt-cursor-pointer" onClick={handleToggle}>
        <h4 className="ppt-h4 ppt-faq-title">{title}</h4>
        <div style={{ minWidth: "40px" }} onClick={handleToggle}>
          <div className={classNames(["ppt-cursor-pointer width-85 ppt-margin-t-3"])} onClick={handleToggle}>
            <Image src={!showItems ? plusImage : minusImage}  alt="faq" />
          </div>
        </div>
      </div>
      {showItems && <div dangerouslySetInnerHTML={{ __html: ans || "" }} className="ppt-faq-ans" />}
    </div>
  );
}

export default ExpandCollaps;
