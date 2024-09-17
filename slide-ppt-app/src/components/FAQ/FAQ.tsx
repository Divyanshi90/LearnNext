"use client"

import { useState } from "react";
import ExpandCollaps from "./ExpandCollapse";
import { FAQDetails } from "@/staticData/staticData";


export default function FAQ() {
  const [showIndex, setShowIndex] = useState(-1);

  const renderFAQ = ({ ans, title }: any, index: number) => {
    return (
      <ExpandCollaps
       key={`faq-${index}`}
       title={title}
       ans={ans}
       showItems={index === showIndex ? true : false}
       showIndex={() => setShowIndex(index === showIndex ? -1 : index)}
      />
    )
  }

  return (
    <div>
      {FAQDetails.map(renderFAQ)}
    </div>
  )
}
