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
    <Dropdown
      open={open}
      trigger={<button>Dropdown</button>}
      menu={[
        <button onClick={handleMenuOne}>Menu 1</button>,
        <button onClick={handleMenuTwo}>Menu 2</button>,
      ]}
    />
  );
}

export default SelectProducts;
