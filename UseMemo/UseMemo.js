import React, { useState, useMemo } from "react";

function UseMemo() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  {/*
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);
*/}

  const increment1 = () => {
    setCounter1(counter1 + 1);
  };

  const increment2 = () => {
    setCounter2(counter2 + 1);
  };

{/*
  const increment3 = () => {
    setCounter3(counter3 + 1);
  };
  const increment4 = () => {
    setCounter4(counter4 + 1);
  };
  */}
  const Counter1_IsEven = useMemo(() => {
    {/*
      let i = 0
      while(i<2000000000) i++
    return  counter1 % 2 === 0
    }, [counter1]
    */}
     return  counter1 % 2 === 0
  }
  )


{/*
   const Counter3_IsEven = () => {
         return  counter3 % 2 === 0
    }
 const Counter4_IsEven = () => {
         return  counter4 % 2 === 0
    }
*/}
  return (
    <>
      <div>
        <div>

        <hr/>
        <span>First remove comment for Counter1_IsEven</span>
        <h6><b>useMemo</b> is used to apply any method(delay) to specific element only then that element can only effected for example counter1 has delay method if i dont use useMemo then delay will effect other onClick functions also for more clarification remove commented eleemnts and see or see the difference while clicking on both the counter buttons couter1 will be some what delay compare to counter2</h6>
        
          <button onClick={increment1}>Counter1: {counter1}</button>
          <span>{Counter1_IsEven ? 'Even' : 'Odd'}</span>
        </div>
        <br />
        <div>
          <button onClick={increment2}>Counter2: {counter2}</button>
        </div>
          <br />
          {/*
        <div>
          <button onClick={increment3}>Counter3: {counter3}</button>
          <span>{Counter3_IsEven() ? 'Even' : 'Odd'}</span>
        </div>
         <br />
        <div>
          <button onClick={increment4}>Counter4: {counter4}</button>
         <span>{Counter4_IsEven() ? 'Even' : 'Odd'}</span>
        </div>
        */}
      </div>
    </>
  );
}

export default UseMemo;
