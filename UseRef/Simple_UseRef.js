import React, { useRef, useEffect } from "react";

function Simple_UseRef() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
    <hr />
 
      <p>This Hook will make it possible to use DOM Nodes directly with in the functional components
</p>
      <input type="text" />

      <input type="text" ref={inputRef} />
    </div>
  );
}

export default Simple_UseRef;
