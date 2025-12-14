// src/components/overview/UiDesignButton.jsx

import React from "react";

/* 1. Icon (private helper) */
function UiDesignIcon() {
  return (
    <div
      className="absolute left-[12px] top-[24px] size-[38px]"
      data-name="UI Design icon"
    >
      <svg
         width="38"
         height="38"
         viewBox="0 0 38 38"
         fill="none"
      >
        <circle cx="19" cy="19" r="19" fill="#4C5C68" />
        <rect
          x="10"
          y="10"
          width="18"
          height="12"
          rx="2"
          stroke="white"
          strokeWidth="2"
        />
        <line
          x1="10"
          y1="26"
          x2="28"
          y2="26"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

/* 2. Card layout (private helper) */
function UiDesign() {
  return (
    <div className="absolute contents left-0 top-0" data-name="UI Design">
      <div className="absolute bg-[#4c5c68] h-[242px] w-[350px] rounded-[15px]" />
      <div className="absolute bg-white h-[223.5px] w-[350px] rounded-[15px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-[18.5px]" />

      <UiDesignIcon />
    </div>
  );
}

/* 3. Exported component */
export default function UiDesignButton() {
  return (
    <div className="relative size-full" data-name="UI Design button">
      <UiDesign />
    </div>
  );
}
