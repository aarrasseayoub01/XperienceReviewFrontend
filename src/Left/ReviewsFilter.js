import React, { useState } from "react";
import "./Left.css"; // Import the CSS file for styling
import { BiCaretDown, BiCaretRight } from "react-icons/bi";
function ReviewsFilter() {
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
      <div className={`list-container ${isExpanded ? "expanded" : ""}`}>
        <div>ayoub</div>
        <div>ayoub</div>
        <div>ayoub</div>
        <div>ayoub</div>
      </div>
    </div>
  );
}

export default ReviewsFilter;
