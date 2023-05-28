import React, { useState, useEffect } from "react";
import "./Left.css"; // Import the CSS file for styling
import { BiCaretDown, BiCaretRight } from "react-icons/bi";
import ReviewList from "../review.json";
import { useSelector, useDispatch } from "react-redux";
import { country } from "../Reducers/filter.js";
function CountryFilter() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [countries, setCountries] = useState([]);
  const countryValue = useSelector((state) => state.filter.country);
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const set = new Set();
    ReviewList.forEach((review) => set.add(review.countryName));
    const array = [...set];
    setCountries(array);
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
            fontSize: "14px",
          }}
        >
          Filter by Country
        </span>
      </button>
      <span
        style={{
          marginLeft: "40px",
          fontSize: "14px",
          color: "blue",
          visibility: countryValue ? "visible" : "hidden",
          cursor: "pointer",
        }}
        onClick={() => dispatch(country(""))}
      >
        clear
      </span>

      <div
        className={`list-container ${isExpanded ? "expanded" : ""}`}
        style={{
          marginLeft: "7px",
          marginTop: "7px",
          gap: "7px",
          display: "grid",
          cursor: "default",
        }}
      >
        {countries.map((country1, i) => (
          <div
            key={country1}
            style={{
              display: "grid",
              alignItems: "center",
              gridTemplateColumns: "80% 20%",
              backgroundColor: country1 === countryValue ? "#e8e8e8" : "white",
            }}
            onClick={() => dispatch(country(country1))}
          >
            <div
              style={{
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={
                  "https://cdn.countryflags.com/thumbs/" +
                  (country1 === "US"
                    ? "united-states-of-america"
                    : country1 === "UK"
                    ? "united-kingdom"
                    : country1.toLowerCase()) +
                  "/flag-400.png"
                }
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
                {country1}
              </span>
            </div>

            <div style={{ justifySelf: "center", color: "gray" }}>
              {reviewsCountry(country1)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function reviewsCountry(country) {
  let counter = 0;

  ReviewList.forEach((review) => {
    review.countryName === country && counter++;
  });
  return counter;
}
export default CountryFilter;
