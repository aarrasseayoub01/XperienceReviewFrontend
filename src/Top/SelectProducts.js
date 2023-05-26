import "./Top.css";
import React, { useState } from "react";
import Dropdown from "../Utilities/Dropdown";
import { IoIosArrowDown } from "react-icons/io";
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
      <Dropdown
        open={open}
        title={"select products"}
        width={"440px"}
        trigger={
          <div
            className="dropdown1"
            style={{
              display: "grid",
              gridTemplateColumns: "10% 32% 57%",
              alignItems: "center",
              padding: "5px",
              border: "1px solid",
              borderColor: "rgba(0, 0, 0, 0.3)",
              borderRadius: "5px",
            }}
          >
            <div className="randomColor" />
            <div
              className="productName left-item"
              style={{
                fontWeight: 500,
              }}
            >
              My App + 2
            </div>
            <div
              className="dropdownArrow"
              style={{
                justifySelf: "end",
                marginTop: "5px",
              }}
            >
              <IoIosArrowDown size={20} color="grey" />
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
