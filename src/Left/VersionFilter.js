import React, { useState } from "react";
import "./Left.css"; // Import the CSS file for styling
import { BiCaretDown, BiCaretRight } from "react-icons/bi";

function VersionFilter() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        style={{
          backgroundColor: "white",
          border: "none",
          outline: "none",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        {isExpanded ? <BiCaretDown /> : <BiCaretRight />}
        <span
          style={{
            fontWeight: 700,
            fontSize: "0.8vw",
          }}
        >
          Filter by Rating
        </span>
      </button>
      <div
        className={`list-container ${isExpanded ? "expanded" : ""}`}
        style={{
          marginLeft: "7px",
          marginTop: "7px",
          gap: "7px",
          display: "grid",
        }}
      >
        <div
          style={{
            display: "grid",
            alignItems: "center",
            gridTemplateColumns: "50% 30% 20%",
          }}
        >
          <div style={{ fontSize: "16px" }}>1.2.0</div>
          <div></div>
          <div style={{ justifySelf: "center", color: "gray" }}>136</div>
        </div>
        <div
          style={{
            display: "grid",
            alignItems: "center",
            gridTemplateColumns: "50% 30% 20%",
          }}
        >
          <div style={{ fontSize: "16px" }}>1.1.4</div>
          <div></div>
          <div style={{ justifySelf: "center", color: "gray" }}>136</div>
        </div>
        <div
          style={{
            display: "grid",
            alignItems: "center",
            gridTemplateColumns: "50% 30% 20%",
          }}
        >
          <div style={{ fontSize: "16px" }}>1.1.0</div>
          <div></div>
          <div style={{ justifySelf: "center", color: "gray" }}>136</div>
        </div>
        <div
          style={{
            display: "grid",
            alignItems: "center",
            gridTemplateColumns: "50% 30% 20%",
          }}
        >
          <div style={{ fontSize: "16px" }}>1.0</div>
          <div></div>
          <div style={{ justifySelf: "center", color: "gray" }}>136</div>
        </div>
      </div>
    </div>
  );
}

export default VersionFilter;
