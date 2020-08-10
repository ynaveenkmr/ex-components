import React from 'react'
import {useParams,useLocation, useHistory} from 'react-router-dom'


const UseLocation = () => {
  const {fname} = useParams();
  const location = useLocation();
  const history = useHistory();
  return(
    <>
    <h6>To Get buttons in the output in url give '/Parameter1/Parameter2' (it should match below location path) before doing this remove comment for redirect tag in NAvRouter.js</h6>
    
    <h6>useLocation mainly used for like premium members for example if he paid money he can see the button</h6>
     <h2>Params {fname}</h2>

     <h6>{location.pathname}</h6>
     {location.pathname === `/UseLocation/Parameter1/Parameter2`?(<button className="btn-sm btn-primary" onClick={()=>{alert('congrats you are premium member')}}>premium member</button>):null}
  
     <h2>in below am using useHistory so that i can go back to previous page using goBack()</h2>

     {location.pathname === `/UseLocation/Parameter1/Parameter2`?(<button className="btn-sm btn-primary" onClick={()=>{history.goBack();}}>Go back</button>):null}

      <h2>in below am using useHistory so that i can go to any page using push()</h2>
     
     {location.pathname === `/UseLocation/Parameter1/Parameter2`?(<button className="btn-sm btn-primary" onClick={()=>{history.push('/');}}>Go to home page</button>):null}
     
     
    </>
  )
}

export default UseLocation