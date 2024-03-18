import React, { useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";

export default function ExpandedItem({ header, children }) {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "30%",
          boxShadow: " 0px 3px 20px #00000021",
          margin: "1rem",
          padding: "0 2rem",
          borderRadius: "15px",
        }}>
        <div>{header}</div>
        <div onClick={handleClick}>
          {expanded ? (
            <SlArrowDown style={{ cursor: "pointer" }} />
          ) : (
            <SlArrowLeft style={{ cursor: "pointer" }} />
          )}
        </div>
      </div>
      {expanded && <div>{children}</div>}
    </div>
  );
}
