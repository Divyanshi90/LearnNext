// PresentationsPreview.tsx
import React, { useMemo } from "react";
// import moment from 'moment';
import classNames from "classnames";
import ToolTipText from "@/components/TooltipText";
// import { useNavigate } from 'react-router-dom';
import { URLRoutes } from "@/URLRoutes";
import { redirect } from "next/navigation";
import { useThumbnailImage } from "@/hooks/useThumbnailHook";

interface IPresentationsPreviewProps {
  index: number;
  imageData: any;
}

function PresentationsPreview({
  imageData,
  index,
}: IPresentationsPreviewProps) {
  const { createdAt, count, _id, prompt, thumbnailId } = imageData;
  //   const navigate = useNavigate();
  const formattedDate = useMemo(() => {
    return createdAt;
    // return moment(createdAt).fromNow();
  }, [createdAt]);

  const handleThumbnailClick = () => {
    redirect(URLRoutes.clients.slides.replace(":executionId", _id));
  };

  const { imageUrl, error: thumbnailError } = useThumbnailImage(
    _id,
    thumbnailId,
    index,
    undefined!,
    false,
    "thumb"
  );

  return (
    <div
      key={`Thumbnail ${index}`}
      className={classNames([
        "ppt-flex ppt-flex-column ppt-presentation-container",
      ])}
    >
      <div className="ppt-padding-4 ppt-cursor-pointer">
        <div className="ppt-presentation-box">
          <div
            className="ppt-background-black-shade ppt-presentation-box-inner"
            onClick={handleThumbnailClick}
          >
            {imageUrl && (
              <img
                src={imageUrl}
                alt={`Thumbnail ${index}`}
                className="width-100 height-100 ppt-padding-4"
                // onError={handleImageError}
              />
            )}
          </div>
        </div>
        <div className="ppt-flex ppt-flex-column ppt-padding-l-4 ppt-padding-r-4">
          <ToolTipText value={prompt} baseClassName="ppt-presentation-title" />
          <div
            className={classNames([
              "ppt-flex ppt-flex-row ppt-flex-justify-between",
            ])}
          >
            <div className="ppt-presentation-info">{formattedDate}</div>
            <div className="ppt-presentation-info">{count} Slides</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PresentationsPreview;
