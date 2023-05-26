import "./Left.css";
import React, { useState } from "react";
import Dropdown from "../Utilities/Dropdown";
import { IoIosArrowDown } from "react-icons/io";
function TimeFilter() {
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
        title={""}
        trigger={
          <div
            className="dropdown1"
            style={{
              display: "grid",
              gridTemplateColumns: "3vw 8vw 1vw",
              alignItems: "center",
              padding: "5px",
              border: "1px solid",
              borderColor: "rgba(0, 0, 0, 0.3)",
              borderRadius: "5px",
            }}
          >
            <img src="time.png" alt="time" style={{ width: "24px" }} />
            <div
              className="productName left-item"
              style={{
                marginLeft: "-10px",
              }}
            >
              all time
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

export default TimeFilter;
