import { useRef } from "react";

const SelectAll = () => {
  
    const select = useRef(null);

  const handleSelect = () => {
    select.current.select()
  };

  return (
    <>
      <input
        ref={select}
        type="text"
        defaultValue="Learning React with useRef"
      />

      <button onClick={handleSelect}>
        Select All
      </button>
    </>
  );
};

export default SelectAll;