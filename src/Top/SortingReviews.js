import React, { useState } from "react";
import Dropdown from "../Utilities/Dropdown";
import { RxCaretSort } from "react-icons/rx";
function SortingReviews() {
  const [open, setOpen] = useState(false);

  const handleMenuOne = () => {
    // do something
    setOpen(false);
  };

  const handleMenuTwo = () => {
    // do something
    setOpen(false);
  };

  return (
    <>
      <Dropdown
        open={open}
        title={"sorting"}
        width={"180px"}
        trigger={
          <div
            className="dropdown1"
            style={{
              display: "grid",
              gridTemplateColumns: "62.5% 37.5%",
              alignItems: "center",
              paddingInline: "10px",
              border: "1px solid",
              borderColor: "rgba(0, 0, 0, 0.3)",
              borderRadius: "5px",
            }}
          >
            <div
              className="productName left-item"
              style={{
                fontSize: "12px",
                fontWeight: 500,
              }}
            >
              Newest First
            </div>
            <div
              className="dropdownArrow"
              style={{
                justifySelf: "end",
                marginTop: "5px",
              }}
            >
              <RxCaretSort size={20} />
            </div>
          </div>
        }
        menu={[
          <div onClick={handleMenuOne} className="divider ">
            <div></div>
            <div
              className="productName item-left "
              style={{
                fontSize: "1.8vh",
              }}
            >
              Latest
            </div>
          </div>,
          <div onClick={handleMenuTwo} className="divider ">
            <div></div>
            <div
              className="productName item-left"
              style={{
                fontSize: "1.8vh",
              }}
            >
              Oldest
            </div>
          </div>,
        ]}
      />
    </>
  );
}

export default SortingReviews;
