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

  const handleApp = (appName) => {
    dispatch(app(appName));
    setOpen(false);
  };
  const apps = ["Amazon", "Flipkart", "Google", "Myntra"];
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
        menu={apps.map((app) => (
          <div onClick={() => handleApp(app)} className=" ">
            <div className="randomColor" />
            <div className="productName left-item">{app}</div>
          </div>
        ))}
      />
    </>
  );
}

export default SelectProducts;
