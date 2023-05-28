import "./App.css";
import CountryFilter from "./Left/CountryFilter";
import ReviewsFilter from "./Left/ReviewsFilter";
import SearchReview from "./Left/SearchReview";
import TimeFilter from "./Left/TimeFilter";
import VersionFilter from "./Left/VersionFilter";
import ReviewsBody from "./Right/ReviewsBody";
import SelectProducts from "./Top/SelectProducts";
import SortingReviews from "./Top/SortingReviews";
import Translation from "./Top/Translation";
import { useRef } from "react";
function AppsReviews() {
  const sectionRef = useRef(null);

  const smoothy = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div ref={sectionRef} className="App">
      <div
        className="topLayout"
        style={{
          borderBottom: "1px solid #5c5c5c40",
        }}
      >
        <SelectProducts />
        <div></div>
        <SortingReviews />
        <Translation />
      </div>

      <div className="mainLayout" style={{ marginTop: "100px" }}>
        <div className="leftLayout">
          <SearchReview />
          <TimeFilter />
          <ReviewsFilter />
          <VersionFilter />
          <CountryFilter />
        </div>
        <div></div>
        <div className="rightLayout" style={{ paddingTop: "20px" }}>
          <ReviewsBody smoothy={smoothy} />
        </div>
      </div>
    </div>
  );
}

export default AppsReviews;
