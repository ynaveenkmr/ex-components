import React, { useState } from 'react'

function WithHooks() {	
	const [firstName, setFirstName] = useState('')	
  const [lastName, setLastName] = useState('')	  

  const submitHandler = e => {
 e.preventDefault()
 alert(`Hello ${firstName} ${lastName}`)
  }
  return (
<>
<form onSubmit={submitHandler}>
<label>First Name</label>
<input type="text" onChange={e => setFirstName(e.target.value)}/>
<label>Last Name</label>
<input type="text" onChange={e => setLastName(e.target.value)}/>
<button>Submit</button>
</form>
</>
  )

}

export default WithHooks