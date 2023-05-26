import { SlMagnifier } from "react-icons/sl";

function SearchReview() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        outline: "1px solid #ccc",
        borderRadius: "2px",
        padding: "5px",
      }}
      className="searchContainer"
    >
      <img src="magnet.png" alt="magnet" />
      <input
        type="text"
        placeholder="search"
        style={{
          padding: "5px 10px",
          border: "none",
          outline: "none",
        }}
      />
    </div>
  );
}
export default SearchReview;
