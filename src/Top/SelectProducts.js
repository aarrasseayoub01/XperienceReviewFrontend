import "./Top.css";
import React, { useState } from "react";
import Dropdown from "../Utilities/Dropdown";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { app } from "../Reducers/filter.js";
function SelectProducts() {
  const [open, setOpen] = useState(false);
  const appValue = useSelector((state) => state.filter.app);
  const dispatch = useDispatch();

  const handleApp = (event) => {
    dispatch(app(event.target.innerText));
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
              {appValue}
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
          <div onClick={handleApp} className=" ">
            <div className="randomColor" />
            <div className="productName left-item">Google</div>
          </div>,
          <div onClick={handleApp} className=" ">
            <div className="randomColor" />
            <div className="productName left-item">Amazon</div>
          </div>,
          <div onClick={handleApp} className=" ">
            <div className="randomColor" />
            <div className="productName left-item">FlipKart</div>
          </div>,
          <div onClick={handleApp} className=" ">
            <div className="randomColor" />
            <div className="productName left-item">Myntra</div>
          </div>,
        ]}
      />
    </>
  );
}

export default SelectProducts;
