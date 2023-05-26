import "./Left.css";
function SearchReview() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        outline: "1px solid #ccc",
        borderRadius: "2px",
        paddingInline: "5px",
        paddingBlock: "2px",
      }}
      className="searchContainer"
    >
      <img
        src="magnet.png"
        alt="magnet"
        style={{
          width: "24px",
          height: "24px",
          marginRight: "5px",
        }}
      />
      <input
        className="inputPlaceholder"
        type="text"
        placeholder="search"
        style={{
          padding: "5px 10px",
          border: "none",
          outline: "none",
          color: "black",
        }}
      />
    </div>
  );
}
export default SearchReview;
