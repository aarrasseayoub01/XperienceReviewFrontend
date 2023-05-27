import React, { useState } from "react";
import "./Left.css"; // Import the CSS file for styling
import { BiCaretDown, BiCaretRight } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import ReviewList from "../review.json";
import { useSelector, useDispatch } from "react-redux";
import { rating } from "../Reducers/filter.js";
function ReviewsFilter() {
  const [isExpanded, setIsExpanded] = useState(false);
  const ratingValue = useSelector((state) => state.filter.rating);
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };
  const RatingList = [5, 4, 3, 2, 1];
  const NumberRating = reviewsRating(RatingList);
  const maxV = Math.max(...NumberRating);
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
        {RatingList.map((star) => {
          return (
            <div
              key={star}
              style={{
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "50% 30% 20%",
                backgroundColor: star === ratingValue ? "#e8e8e8" : "white",
              }}
              onClick={() => dispatch(rating(star))}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <AiFillStar size={18} color="#ad7637" />
                <AiFillStar size={18} color={star > 1 ? "#ad7637" : "#ccc"} />
                <AiFillStar size={18} color={star > 2 ? "#ad7637" : "#ccc"} />
                <AiFillStar size={18} color={star > 3 ? "#ad7637" : "#ccc"} />
                <AiFillStar size={18} color={star > 4 ? "#ad7637" : "#ccc"} />
              </div>
              <div
                style={{
                  backgroundColor: "#ccc",
                  width: 45 * (NumberRating[star - 1] / maxV),
                  height: "15px",
                  borderRadius: "5px",
                  marginLeft: "5px",
                }}
              >
                {" "}
              </div>
              <div style={{ justifySelf: "center", color: "gray" }}>
                {NumberRating[star - 1]}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
function reviewsRating(ratings) {
  const results = [];
  ratings.forEach((rating) => {
    let counter = 0;

    ReviewList.forEach((review) => {
      parseInt(review.rating) === rating && counter++;
    });
    results[rating - 1] = counter;
  });
  return results;
}
export default ReviewsFilter;
