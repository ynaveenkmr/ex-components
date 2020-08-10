import React, { useState } from 'react'
import useInput from './useInput';

function WithOutHooks() {

const [firstName, bindFirstName, resetFirstName] = useInput('')
const [lastName, bindLastName, resetLastName] = useInput('')


  const submitHandler = e => {
 e.preventDefault()
 alert(`Hello ${firstName} ${lastName}`)
  resetFirstName()
    resetLastName()
  }
  return (
<>
<form onSubmit={submitHandler}>
<label>First Name</label>
<input type="text"   {...bindFirstName}/>
<label>Last Name</label>
<input type="text"   {...bindLastName}/>
<button>Submit</button>
</form>
</>
  )
}

export default WithOutHooks