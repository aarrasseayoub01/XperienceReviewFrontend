import React, { useState } from "react";
import "./Left.css"; // Import the CSS file for styling
import { BiCaretDown, BiCaretRight } from "react-icons/bi";

function CountryFilter() {
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
          Filter by Country
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
            gridTemplateColumns: "80% 20%",
          }}
        >
          <div
            style={{ fontSize: "16px", display: "flex", alignItems: "center" }}
          >
            <img
              src="https://cdn.countryflags.com/thumbs/united-states-of-america/flag-400.png"
              alt="United States"
              style={{
                width: "20px",
                height: "15px",
                marginRight: "10px",
                borderRadius: "3px",
                border: "0.1px solid #ccc",
              }}
            />
            <span style={{ fontSize: "12px", fontWeight: "500" }}>
              United States
            </span>
          </div>

          <div style={{ justifySelf: "center", color: "gray" }}>136</div>
        </div>
        <div
          style={{
            display: "grid",
            alignItems: "center",
            gridTemplateColumns: "80% 20%",
          }}
        >
          <div
            style={{ fontSize: "16px", display: "flex", alignItems: "center" }}
          >
            <img
              src="https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png"
              alt="United Kingdom"
              style={{
                width: "20px",
                height: "15px",
                marginRight: "10px",
                borderRadius: "3px",
                border: "0.1px solid #ccc",
              }}
            />
            <span style={{ fontSize: "12px", fontWeight: "500" }}>
              United Kingdom
            </span>
          </div>

          <div style={{ justifySelf: "center", color: "gray" }}>136</div>
        </div>
        <div
          style={{
            display: "grid",
            alignItems: "center",
            gridTemplateColumns: "80% 20%",
          }}
        >
          <div
            style={{ fontSize: "16px", display: "flex", alignItems: "center" }}
          >
            <img
              src="https://cdn.countryflags.com/thumbs/germany/flag-400.png"
              alt="Germany"
              style={{
                width: "20px",
                height: "15px",
                marginRight: "10px",
                borderRadius: "3px",
                border: "0.1px solid #ccc",
              }}
            />
            <span style={{ fontSize: "12px", fontWeight: "500" }}>Germany</span>
          </div>

          <div style={{ justifySelf: "center", color: "gray" }}>136</div>
        </div>
        <div
          style={{
            display: "grid",
            alignItems: "center",
            gridTemplateColumns: "80% 20%",
          }}
        >
          <div
            style={{ fontSize: "16px", display: "flex", alignItems: "center" }}
          >
            <img
              src="https://cdn.countryflags.com/thumbs/japan/flag-400.png"
              alt="Japan"
              style={{
                width: "20px",
                height: "15px",
                marginRight: "10px",
                borderRadius: "3px",
                border: "0.1px solid #ccc",
              }}
            />
            <span style={{ fontSize: "12px", fontWeight: "500" }}>Japan</span>
          </div>

          <div style={{ justifySelf: "center", color: "gray" }}>136</div>
        </div>
      </div>
    </div>
  );
}

export default CountryFilter;
