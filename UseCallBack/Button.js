import React from "react";

function Button({ handleClick, Children }) {
  console.log("Rendering Button ", Children);
  return (
    <div>
      <Button onClick={handleClick}>{Children}</Button>
    </div>
  );
}

export default Button;
