import { AiFillStar } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

function Review(props) {
  return (
    <div
      style={{
        margin: "15px",
        padding: "15px",
        borderRadius: "7px",
        position: "relative",
        boxShadow:
          "0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.1), 0 -4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "7% 8% 28% 40% 17% ",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "violet",
            height: "28px",
            width: "28px",
            borderRadius: "5px",
          }}
        />
        <div
          style={{
            backgroundColor: "#ccc",
            borderRadius: "3px",
            width: "35px",
            height: "24px",
            fontSize: "12px",
            fontWeight: "500",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {props.appStoreName}
        </div>
        <div style={{ fontWeight: "500", fontSize: "18px" }}>
          {props.reviewHeading}
        </div>
        <div style={{ marginTop: "6px" }}>
          <AiFillStar size={20} color="gold" />
          <AiFillStar size={20} color="gold" />
          <AiFillStar size={20} color="gold" />
          <AiFillStar size={20} color="gold" />
          <AiFillStar size={20} color="gold" />
        </div>
        <div
          style={{
            border: "1px solid black",
            borderRadius: "3px",
            textAlign: "center",
            fontSize: "12px",
            fontWeight: "500",
            padding: "5px",
          }}
        >
          TRANSLATED
        </div>
      </div>
      <div
        style={{ fontSize: "16px", marginTop: "18px", marginBottom: "18px" }}
      >
        {props.reviewText}
      </div>
      <div
        style={{
          dispaly: "grid",
          gridTemplateColumns: "80% 20%",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "12px",
            fontWeight: "500",
            gap: "15px",
          }}
        >
          <span>by {props.reviewuUser}</span>
          <span>{props.reviewDate}</span>
          <span>v{props.version}</span>
          <div style={{ display: "flex" }}>
            <img
              src={
                "https://cdn.countryflags.com/thumbs/" +
                (props.countryName === "US"
                  ? "united-states-of-america"
                  : props.countryName === "UK"
                  ? "united-kingdom"
                  : props.countryName.toLowerCase()) +
                "/flag-400.png"
              }
              alt={props.countryName}
              style={{
                width: "20px",
                height: "15px",
                marginRight: "10px",
                borderRadius: "3px",
                border: "0.1px solid #ccc",
              }}
            />
            <div>{props.countryName}</div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              position: "absolute",
              right: "20px",
            }}
          >
            <div>Reply </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>Share</div>
              <IoIosArrowDown style={{ marginTop: "5px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Review;
