import React, { useRef, useEffect } from "react";

function Simple_UseRef() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h6>Below is used for simple useRef (on page load useEffect is making focus to that second input field) </h6>
      <input type="text" />

      <input type="text" ref={inputRef} />
    </div>
  );
}

export default Simple_UseRef;
