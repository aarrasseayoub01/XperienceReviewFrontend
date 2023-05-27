import { Routes, Route } from "react-router-dom";
import AppsReviews from "./AppsReviews";
function App() {
  return (
    <>
      <Routes>
        <Route path="/:page" element={<AppsReviews />} />
      </Routes>
    </>
  );
}
export default App;
