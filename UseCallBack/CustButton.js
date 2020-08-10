import React from "react";

function CustButton({ handleClick, Children }) {
  console.log("Rendering Button ", Children);
  return (
    <div>
      <CustButton onClick={handleClick}>{Children}</CustButton>
    </div>
  );
}

export default CustButton;
