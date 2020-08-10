import React from "react";

function CustButton({ handleClick, children }) {
  console.log("Rendering Button ", children);
  return (
    <div>
      <button className="btn-primary btn-sm" onClick={handleClick}>{children}</button>
    </div>
  );
}

export default React.memo(CustButton);
