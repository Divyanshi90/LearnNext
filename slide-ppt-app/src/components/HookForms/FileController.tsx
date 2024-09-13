import SvgIcon, { CUSTOM_SVG_ICON, SVGType } from "components/SvgIcon";
import React, { useRef } from "react";

export default function FileController({ field: { onChange, value, ref }, id, accept, disabled, placeholder  }: any) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const drop = useRef<HTMLInputElement | null>(null);

  const uploadButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (drop.current) {
      drop.current.classList.add("file-dragging");
    }
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (drop.current) {
      drop.current.classList.remove("file-dragging");
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (drop.current) {
      drop.current.classList.remove("file-dragging");

      const files = event.dataTransfer.files;
      if (files && files.length > 0) {
        onChange(files[0]);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onChange(files[0]);
    }
  };

  
  return (
    <div className="ppt-flex-align-center ppt-margin-t-2 ppt-fileUploader-container ppt-position-relative">
      <div
        ref={drop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        draggable
        onClick={uploadButtonClick}
        className="width-100 ppt-flex ppt-flex-row ppt-flex-justify-between ppt-background-black-shade-9 ppt-text-white-shade-1 ppt-padding-4 ppt-upload-input"
      >
        <input ref={fileInputRef} onChange={handleFileChange} type="file" id={id} accept={accept} disabled={disabled} hidden />
        {!value && <div>{placeholder}</div>}
        {value && <div>{value.name}</div>}
        {!value && <SvgIcon name={CUSTOM_SVG_ICON.Upload} svgType={SVGType.CUSTOM} size={"huge"} baseclassname={"text-grey-shade-4"} />}
      </div>
    </div>
  );
}

