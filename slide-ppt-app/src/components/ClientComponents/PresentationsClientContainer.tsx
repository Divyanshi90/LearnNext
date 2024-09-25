// PresentationsClientContainer.tsx
"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
// import { useNavigate } from 'react-router-dom';
import PresentationsPreview from "./PresentationPreview"; // Reusable preview component
// import Loading from 'components/Loading';
// import NoPPTContainer from 'containers/NoPPTContainer';
// import { debounce } from 'utils/utils';
// import { fetchRequest, getFullUrl } from 'Api';
import { URLRoutes } from "@/URLRoutes";
// import { CONFIG } from 'config';
import "./style.scss";

interface IPresentationsClientContainerProps {
  initialPresentations: any[];
  totalPages: number;
}

function PresentationsClientContainer({
  initialPresentations,
  totalPages,
}: IPresentationsClientContainerProps) {
  const [presentations, setPresentations] =
    useState<Array<any>>(initialPresentations);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const listInnerRef = useRef<HTMLDivElement>(null);
  //   const navigate = useNavigate();
  console.log(initialPresentations);
  const fetchPresentationsList = async (newPage: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://dev.keynoteslides.com/ppt/v1/ppt/list",
        {
          method: "POST",
          body: JSON.stringify({ page: newPage, pageSize: 100 }),
          headers: {
            Authorization:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjdXN0b21lcl9pZCI6IjYzNDA5NjMiLCJleHAiOjE3MjcyNjUzMjZ9.aWS7makU9qLcERCgGFCzQcx_azg2d5WvbKZ54nO_AgM",
            "Content-Type": "application/json", // Add Content-Type header
          },
        }
      );
      const data = await response.json();
      setPresentations((prevPresentations) => [
        ...prevPresentations,
        data?.records,
      ]);
    } catch (error) {
      console.error("Error fetching more presentations:", error);
    }
    setLoading(false);
  };

  const handleScroll = useCallback(() => {
    if (!loading && listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
      if (scrollPercentage > 0.9 && page < totalPages) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  }, [loading, page, totalPages]);

  useEffect(() => {
    if (page > 0) {
      fetchPresentationsList(page);
    }
  }, [page]);

  //   useEffect(() => {
  //     if (listInnerRef.current) {
  //       const handleScrollDebounced = debounce(handleScroll, 300);
  //       listInnerRef.current.addEventListener('scroll', handleScrollDebounced);
  //       return () => {
  //         listInnerRef.current?.removeEventListener('scroll', handleScrollDebounced);
  //       };
  //     }
  //   }, [handleScroll]);
  console.log(presentations);
  return (
    <>
      {initialPresentations.length > 0 ? (
        <div
          ref={listInnerRef}
          className="width-100 height-100 ppt-presentation-wrapper ppt-flex ppt-flex-wrap"
        >
          {initialPresentations.map((imageData, index) => (
            <PresentationsPreview
              key={`image-${index}`}
              imageData={imageData}
              index={index}
            />
          ))}
        </div>
      ) : (
        // <NoPPTContainer />
        <div className="ppt-text-primary-color">NO Presentations Found</div>
      )}
    </>
  );
}

export default PresentationsClientContainer;
