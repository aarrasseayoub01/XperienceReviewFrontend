import "./App.css";
import CountryFilter from "./Left/CountryFilter";
import ReviewsFilter from "./Left/ReviewsFilter";
import SearchReview from "./Left/SearchReview";
import TimeFilter from "./Left/TimeFilter";
import VersionFilter from "./Left/VersionFilter";
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
          <TimeFilter />
          <ReviewsFilter />
          <VersionFilter />
          <CountryFilter />
        </div>
      </div>
    </div>
  );
}

export default AppsReviews;
