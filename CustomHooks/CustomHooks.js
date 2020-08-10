import React from 'react'
import WithHooks from './WithHooks'
import WithOutHooks from './WithOutHooks/WithOutHooks'


function CustomHooks(){
  return(
    <>
    <hr />
    <div>
    <p><u>With Hooks</u></p>
    <p>With Hooks component example was commented</p>
   {/*
   <p>Below form data remains same after submitting</p>
    <WithHooks />
    */}

    </div>

    <div>
    <p><u>Custom Hooks</u></p>
    <WithOutHooks />
</div>
    
    </>
  )
}

export default CustomHooks