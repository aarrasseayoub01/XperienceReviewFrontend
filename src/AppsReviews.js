import "./App.css";
import SearchReview from "./Left/SearchReview";
import SelectProducts from "./Top/SelectProducts";
import SortingReviews from "./Top/SortingReviews";
import Translation from "./Top/Translation";
function AppsReviews() {
  return (
    <div className="App">
      <div
        className="topLayout"
        style={{
          borderBottom: "1px solid gray",
        }}
      >
        <SelectProducts />
        <div></div>
        <SortingReviews />
        <Translation />
      </div>

      <div className="mainLayout">
        <div className="leftLayout">
          <SearchReview />
        </div>
      </div>
    </div>
  );
}

export default AppsReviews;
