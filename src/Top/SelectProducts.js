import "./Top.css";
import React, { useState } from "react";
import Dropdown from "../Utilities/Dropdown";
function SelectProducts() {
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
      <div className="textColor" style={{ marginBottom: "5px" }}>
        select products
      </div>
      <Dropdown
        open={open}
        trigger={
          <div className="dropdown1 trigger">
            <div className="randomColor" />
            <div className="productName left-item">My App + 2</div>
            <div className="dropdownArrow right-item">
              <img src="down-arrow.png" alt="down-arrow" />
            </div>
          </div>
        }
        menu={[
          <div onClick={handleMenuOne} className=" ">
            <div className="randomColor" />
            <div className="productName left-item">My App + 3</div>
          </div>,
          <div onClick={handleMenuTwo} className=" ">
            <div className="randomColor" />
            <div className="productName left-item">My App + 4</div>
          </div>,
        ]}
      />
    </>
  );
}

export default SelectProducts;
