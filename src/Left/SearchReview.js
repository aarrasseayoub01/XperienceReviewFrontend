import "./Left.css";
import { useSelector, useDispatch } from "react-redux";
import { search } from "../Reducers/filter.js";
function SearchReview() {
  const searchValue = useSelector((state) => state.filter.search);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        outline: "1px solid #ccc",
        borderRadius: "3.5px",
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
        value={searchValue}
        onChange={(e) => dispatch(search(e.target.value))}
        style={{
          padding: "5px 2px",
          border: "none",
          outline: "none",
          color: "black",
        }}
      />
    </div>
  );
}
export default SearchReview;
