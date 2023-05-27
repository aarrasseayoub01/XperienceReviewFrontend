import { IoMdNotifications } from "react-icons/io";
import { BiCaretDown } from "react-icons/bi";
import Review, { howMuchTimeAgo } from "./Review";
import ReviewList from "../review.json";
import { useParams, useNavigate } from "react-router-dom";
import PaginationBar from "../Utilities/PaginationBar";
import { useRef } from "react";
import { useSelector } from "react-redux";
import {
  country,
  app,
  version,
  rating,
  time,
  search,
  order,
} from "../Reducers/filter.js";
function ReviewsBody() {
  const { page } = useParams();

  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const countryValue = useSelector((state) => state.filter.country);
  const appValue = useSelector((state) => state.filter.app);
  const versionValue = useSelector((state) => state.filter.version);
  const ratingValue = useSelector((state) => state.filter.rating);
  const timeValue = useSelector((state) => state.filter.time);
  const searchValue = useSelector((state) => state.filter.search);
  const orderValue = useSelector((state) => state.filter.order);

  const handleNavigation = (page) => {
    navigate("/" + page);
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const realReviewList = ReviewList.filter((review) => {
    if (countryValue === "") {
      return true;
    } else {
      return review.countryName === countryValue;
    }
  })

    .filter((review) => {
      if (versionValue === "") {
        return true;
      } else {
        console.log(versionValue);
        return (
          (review.version[0].toLowerCase() === "v"
            ? review.version.slice(1)
            : review.version) === versionValue
        );
      }
    })
    .filter((review) => {
      if (ratingValue === "") {
        return true;
      } else {
        return parseInt(review.rating) === ratingValue;
      }
    })
    .filter((review) => {
      if (timeValue === "All time") {
        return true;
      } else {
        const match = howMuchTimeAgo(review.reviewDate).match(/\d+/);
        const firstNumber = match ? parseInt(match[0]) : null;
        if (timeValue[timeValue.length - 1] === "<") {
          return firstNumber > 1000;
        } else {
          return firstNumber < 1000;
        }
      }
    })
    .filter((review) => {
      if (appValue === "Amazon") {
        return true;
      } else {
        return review.appStoreName === appValue;
      }
    })
    .filter((review) => {
      if (searchValue === "") {
        return true;
      } else {
        return (
          review.reviewHeading
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          review.reviewText.toLowerCase().includes(searchValue.toLowerCase())
        );
      }
    })
    .sort((a, b) => {
      if (a.reviewCreatedOn < b.reviewCreatedOn) {
        return 1;
      } else {
        return -1;
      }
    });
  // if (page === 0 || page > realReviewList.length / 10) {
  //   return "No such a page";
  // }
  return (
    <>
      <div
        ref={sectionRef}
        style={{
          display: "grid",
          gridTemplateColumns: "55% 20% 20%",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <div
          style={{ fontWeight: "500", fontSize: "14px", marginLeft: "15px" }}
        >
          Viewing {page * 10 - 9}-{page * 10} of {realReviewList.length} Reviews
        </div>
        <button
          style={{
            backgroundColor: "white",
            border: "0.7px solid #ccc",
            borderRadius: "5px",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-around",
            padding: "5px",
            cursor: "pointer",
            marginTop: "15px",
          }}
        >
          <IoMdNotifications size={20} color="black" />
          <span>Create Alert</span>
          <BiCaretDown color="black" />
        </button>
        <button
          style={{
            backgroundColor: "white",
            border: "0.7px solid #ccc",
            borderRadius: "5px",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-around",
            padding: "5px",
            cursor: "pointer",
            marginTop: "15px",
          }}
        >
          <IoMdNotifications size={20} color="black" />
          <span>Create Alert</span>
          <BiCaretDown color="black" />
        </button>
      </div>
      <div style={{ marginTop: "10px" }}>
        {realReviewList.slice(page * 10 + -10, page * 10 + 1).map((review) => (
          <Review
            key={review.id}
            appStoreName={review.appStoreName}
            reviewDate={review.reviewDate}
            rating={review.rating}
            version={review.version}
            countryName={review.countryName}
            reviewHeading={review.reviewHeading}
            reviewText={review.reviewText}
            reviewuUser={review.reviewUserName}
          />
        ))}
      </div>
      <PaginationBar
        totalPages={Math.ceil(realReviewList.length / 10)}
        onPageChange={(page) => handleNavigation(page)}
      />
    </>
  );
}

export default ReviewsBody;
