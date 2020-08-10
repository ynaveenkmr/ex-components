import React from "react";
import ClassTimer from "./ClassTimer";
import Simple_UseRef from "./Simple_UseRef";
import HookTimer from "./HookTimer";

function UseRef() {
  return (
    <>
      <hr />

      <p>
        This Hook will make it possible to use DOM Nodes directly with in the
        functional components
      </p>
      <ClassTimer />
      <HookTimer />
      <br />
      <Simple_UseRef />
    </>
  );
}

export default UseRef;
