import "./Dropdown.css"
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { open } from "../Reducers/filter.js";
const Dropdown = ({ title, trigger, menu, width }) => {
    const openValue = useSelector((state) => state.filter.open);
    const dispatch = useDispatch();
    const handleOpen = () => {
      openValue===title?dispatch(open("lol")):
      dispatch(open(title))
    };
   
    return (
      <div className="dropdown" style={{width: width}}>
        <div className="textColor" style={{ marginBottom: "5px" }} >
        {title}
      </div>
        {React.cloneElement(trigger, {
          onClick: handleOpen,
        })}
        {openValue===title ? (
          <ul className="menu">
            {menu.map((menuItem, index) => (
              <li key={index} className="menu-item">
                {React.cloneElement(menuItem, {
                  onClick: () => {
                    menuItem.props.onClick();
                    dispatch(open("lol"));
                  },
                })}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  };

export default Dropdown;