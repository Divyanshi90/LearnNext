
import "./style.scss";

function MenuCard({ title, desc , id}: any ) {
  return (
    <div className="ppt-section2-card">
      <div className="ppt-flex ppt-flex-column ppt-section2-card-inner  ppt-padding-6">
        <div className="ppt-section2-card-circle ppt-flex ppt-flex-justify-center ppt-flex-align-center ppt-text-4 ppt-text-primary-color ppt-margin-b-4">{id}</div>
        <h3 className="ppt-h3 ppt-section2-card-text1">{title}</h3>
        <div className="ppt-section2-card-text2">{desc}</div>
      </div>
    </div>
  );
}

export default MenuCard;
