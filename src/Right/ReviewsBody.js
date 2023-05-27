import { IoMdNotifications } from "react-icons/io";
import { BiCaretDown } from "react-icons/bi";
import Review from "./Review";
import ReviewList from "../review.json";
function ReviewsBody() {
  return (
    <>
      <div
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
          Viewing 1-10 of 157 Reviews
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
        {ReviewList.map((review) => (
          <Review
            id={review.id}
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
    </>
  );
}

export default ReviewsBody;
