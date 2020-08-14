import React,{useState, useEffect} from 'react'
import axios from 'axios'
import UseReducerFetchingAPI from './UseReducerFetchingAPI'

function UseStateFetchingAPI(){
  const [post, setPost] = useState({})
  const [load, setLoad] = useState(true)
  const [error, setError] = useState('')

useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => {
    setLoad(false)
    setPost(res.data)
    setError()
  })
  .catch(error => {
    setLoad(false)
    setPost({})
    setError("Sorry unable to fetch")
  })
},[])

  return(
    <>
    <hr />
    <h2>useState Vs useReducer</h2>
    <h4><u>useState Fetching API</u></h4>
     {load? 'loading...':post.title}
     {error?error:null}

    <h4><u>Using Reducer fetching api</u></h4>
    <UseReducerFetchingAPI />

    </>
  )
}

export default UseStateFetchingAPI