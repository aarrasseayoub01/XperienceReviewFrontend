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
          "4px 2px 4px rgba(0, 0, 0, 0.06), 10px 15px 8px rgba(0, 0, 0, 0.04), 0 -2px 0px rgba(0, 0, 0, 0.02)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "7% 8% 68% 17% ",
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
            height: "26px",
            fontSize: "12px",
            fontWeight: "500",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {props.appStoreName}
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <div
            style={{ fontWeight: "500", fontSize: "18px", marginLeft: "15px" }}
          >
            {props.reviewHeading}
          </div>
          <div style={{ marginTop: "6px" }}>
            <AiFillStar
              size={20}
              color={props.rating > 0 ? "#ad7637" : "gray"}
            />
            <AiFillStar
              size={20}
              color={props.rating > 1 ? "#ad7637" : "gray"}
            />
            <AiFillStar
              size={20}
              color={props.rating > 2 ? "#ad7637" : "gray"}
            />
            <AiFillStar
              size={20}
              color={props.rating > 3 ? "#ad7637" : "gray"}
            />
            <AiFillStar
              size={20}
              color={props.rating > 4 ? "#ad7637" : "gray"}
            />
          </div>
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
          <span>{howMuchTimeAgo(props.reviewDate)}</span>
          <span>
            {props.version[0].toLowerCase() === "v"
              ? "v" + props.version.substring(1)
              : "v" + props.version}
          </span>
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

export function howMuchTimeAgo(inputDateString) {
  const inputDate = new Date(inputDateString);
  const currentDate = new Date();

  const timeDifferenceInMs = currentDate - inputDate; // Calculate the time difference in milliseconds
  const totalHoursPassed = Math.floor(timeDifferenceInMs / (1000 * 60 * 60)); // Convert milliseconds to hours
  const totalDaysPassed = Math.floor(totalHoursPassed / 24); // Convert hours to days

  if (totalDaysPassed !== 0) {
    return totalDaysPassed + " days ago";
  } else {
    return totalHoursPassed + " hours ago";
  }
}
export default Review;
