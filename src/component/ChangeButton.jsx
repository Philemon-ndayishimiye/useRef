import React, { useRef, useState } from "react";

export default function ChangeButton() {
  const headOne = useRef();
  let buttonclik = useRef(0);

  const handleClick = () => {
    buttonclik.current += 1;

    console.log("button clicked", buttonclik.current);
  };

  return (
    <div>
      <h1 className="text-center text-4xl" ref={headOne}>
        Hello philemon developer
      </h1>

      <button
        className=" mx-6 border px-4 py-2 rounded-2xl bg-amber-300 cursor-pointer mt-[50px]"
        onClick={handleClick}
        // ref={buttonclik}
      >
        click
      </button>
    </div>
  );
}
