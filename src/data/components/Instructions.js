import React from "react";

const Instructions = ({ steps }) => {
  return (
    <div>
      {steps.map((step, index) => (
        <p key={index}>{step}</p>
      ))}
    </div>
  );
};

export default Instructions;
