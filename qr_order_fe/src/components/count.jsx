import React from "react";

const Count = () => {
  return (
    <div>
      <div className="flex items-center">
        <button
          className="rounded-md"
          style={{
            border: "1px solid #C5C5C5",
            width: "28px",
            height: "28px",
          }}
        >
          -
        </button>
        <div className="mx-3">1</div>
        <button
          className="rounded-md orange-text"
          style={{
            border: "1px solid #FF724C",
            width: "28px",
            height: "28px",
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Count;
