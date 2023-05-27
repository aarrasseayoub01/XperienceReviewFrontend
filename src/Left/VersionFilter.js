import React, { useState, useEffect } from "react";
import "./Left.css"; // Import the CSS file for styling
import { BiCaretDown, BiCaretRight } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { version } from "../Reducers/filter.js";
import ReviewList from "../review.json";
function VersionFilter() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [versions, setVersions] = useState([]);
  const versionValue = useSelector((state) => state.filter.version);
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };
  useEffect(() => {
    const set = new Set();
    ReviewList.forEach((review) => set.add(review.version));
    const array = [...set];
    setVersions(array);
  }, []);

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
          Filter by Version
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
        {versions.map((version1) => {
          const numberReviews = reviewsVersion(
            version1[0].toLowerCase() === "v" ? version1.slice(1) : version1
          );
          return (
            <div
              key={version1 + numberReviews}
              style={{
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "50% 30% 20%",
                backgroundColor:
                  (version1[0].toLowerCase() === "v"
                    ? version1.slice(1)
                    : version1) === versionValue
                    ? "#e8e8e8"
                    : "white",
              }}
            >
              <div
                style={{ fontSize: "16px", cursor: "default" }}
                onClick={(e) => dispatch(version(e.target.innerText))}
              >
                {version1[0].toLowerCase() === "v"
                  ? version1.slice(1)
                  : version1}
              </div>
              <div></div>
              <div style={{ justifySelf: "center", color: "gray" }}>
                {numberReviews}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
function reviewsVersion(version) {
  let counter = 0;
  ReviewList.forEach((review) => {
    (review.version[0].toLowerCase() === "v"
      ? review.version.slice(1)
      : review.version) === version && counter++;
  });
  return counter;
}
export default VersionFilter;
