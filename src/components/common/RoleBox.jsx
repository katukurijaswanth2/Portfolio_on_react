import React from "react";
import "./RoleBox.css";

const handlePositions = [
  { className: "tl" },
  { className: "tc" },
  { className: "tr" },
  { className: "bl" },
  { className: "bc" },
  { className: "br" },
];

export const RoleBox = ({
  title = "FRONT END",
  description = "My frontend portfolio highlighting modern UI, responsive layouts, and interactive web experiences.",
}) => {
  return (
    <div className="front-end">
      <div className="role-box">
        <h1>{title}</h1>
        <p>{description}</p>

        {handlePositions.map((handle) => (
          <span
            key={handle.className}
            className={`handle ${handle.className}`}
          />
        ))}
      </div>
    </div>
  );
};
