import { IoMdNotifications } from "react-icons/io";
import { BiCaretDown } from "react-icons/bi";
import Review from "./Review";
import ReviewList from "../review.json";
import { useParams, useNavigate } from "react-router-dom";
import PaginationBar from "../Utilities/PaginationBar";
import { useRef } from "react";
function ReviewsBody() {
  const { page } = useParams();
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const handleNavigation = (page) => {
    navigate("/" + page);
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

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
          Viewing {page * 10 + 1}-{page * 10 + 10} of {ReviewList.length}{" "}
          Reviews
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
        {ReviewList.slice(page * 10 + 1, page * 10 + 11).map((review) => (
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
        totalPages={ReviewList.length}
        onPageChange={(page) => handleNavigation(page)}
      />
    </>
  );
}

export default ReviewsBody;
