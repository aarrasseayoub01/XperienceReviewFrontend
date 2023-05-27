import "./Left.css";
import React, { useState } from "react";
import Dropdown from "../Utilities/Dropdown";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { time } from "../Reducers/filter.js";
function TimeFilter() {
  const [open, setOpen] = useState(false);
  const timeValue = useSelector((state) => state.filter.time);
  const dispatch = useDispatch();
  const handleMenuOne = () => {
    dispatch(time("1000 days >"));
    setOpen(false);
  };

  const handleMenuTwo = () => {
    dispatch(time("1000 days <"));
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
              gridTemplateColumns: "45px 120px 15px",
              alignItems: "center",
              padding: "2px",
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
              {timeValue}
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
            <div className="productName left-item">less than 1000 days</div>
          </div>,
          <div onClick={handleMenuTwo} className=" ">
            <div className="randomColor" />
            <div className="productName left-item">more than a 1000 days</div>
          </div>,
        ]}
      />
    </>
  );
}

export default TimeFilter;
