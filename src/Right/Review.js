import { AiFillStar } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

function Review() {
  return (
    <div
      style={{
        padding: "15px",
        borderRadius: "7px",
        boxShadow:
          " 2px 2px 4px rgba(0, 0, 0, 0.1), 2px 4px 8px rgba(0, 0, 0, 0.1)",
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
            textAlign: "center",
            fontWeight: "500",
          }}
        >
          iOS
        </div>
        <div style={{ fontWeight: "500", fontSize: "18px" }}>
          I use it every day!
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
        style={{ fontSize: "16px", marginTop: "18px", marginBottom: "15px" }}
      >
        In this assignment, we have to create a search filter for app reviews.
        You can think of this just like the search experience you have on
        flipkart, amazon or myntra for various kinds of products on these
        websites. Similar to these.
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
          <span>by Akemi</span>
          <span>2 hours ago</span>
          <span>v1.0.0</span>
          <div style={{ display: "flex" }}>
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
            <div>Japan</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <div>Reply </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>Share</div>
            <IoIosArrowDown style={{ marginTop: "5px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Review;
