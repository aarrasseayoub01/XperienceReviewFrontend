import React, { useState } from "react";
import "./Left.css"; // Import the CSS file for styling
import { BiCaretDown, BiCaretRight } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <AiFillStar size={18} color="gold" />
            <AiFillStar size={18} color="gold" />
            <AiFillStar size={18} color="gold" />
            <AiFillStar size={18} color="gold" />
            <AiFillStar size={18} color="gold" />
          </div>
          <div
            style={{
              backgroundColor: "#ccc",
              width: "45px",
              height: "15px",
              borderRadius: "5px",
              marginLeft: "5px",
            }}
          >
            {" "}
          </div>
          <div style={{ justifySelf: "center", color: "gray" }}>136</div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <AiFillStar size={18} color="gold" />
            <AiFillStar size={18} color="gold" />
            <AiFillStar size={18} color="gold" />
            <AiFillStar size={18} color="gold" />
            <AiFillStar size={18} color="#ccc" />
          </div>
          <div
            style={{
              backgroundColor: "#ccc",
              width: "30px",
              height: "15px",
              borderRadius: "5px",
              marginLeft: "10px",
            }}
          >
            {" "}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <AiFillStar size={18} color="gold" />
            <AiFillStar size={18} color="gold" />
            <AiFillStar size={18} color="gold" />
            <AiFillStar size={18} color="#ccc" />
            <AiFillStar size={18} color="#ccc" />
          </div>
          <div
            style={{
              backgroundColor: "#ccc",
              width: "30px",
              height: "15px",
              borderRadius: "5px",
              marginLeft: "10px",
            }}
          >
            {" "}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <AiFillStar size={18} color="gold" />
            <AiFillStar size={18} color="gold" />
            <AiFillStar size={18} color="#ccc" />
            <AiFillStar size={18} color="#ccc" />
            <AiFillStar size={18} color="#ccc" />
          </div>
          <div
            style={{
              backgroundColor: "#ccc",
              width: "30px",
              height: "15px",
              borderRadius: "5px",
              marginLeft: "10px",
            }}
          >
            {" "}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <AiFillStar size={18} color="gold" />
            <AiFillStar size={18} color="#ccc" />
            <AiFillStar size={18} color="#ccc" />
            <AiFillStar size={18} color="#ccc" />
            <AiFillStar size={18} color="#ccc" />
          </div>
          <div
            style={{
              backgroundColor: "#ccc",
              width: "30px",
              height: "15px",
              borderRadius: "5px",
              marginLeft: "10px",
            }}
          >
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewsFilter;
