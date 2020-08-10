import React from 'react'
import {useParams} from 'react-router-dom'

{/*
const UseParams = ({match}) => {
return(
  <>
  <h2>{match.params.fname}</h2>
  </>
)
}
*/}


const UseParams = () => {
  const {fname} = useParams();
  return(
    <>
    <h2>This useParams is the new method in Hooks and When there is redirect tag is there then params is not working check by removing it in NavRouter.js file</h2>
     <h2>Params {fname}</h2>
    </>
  )
}

export default UseParams