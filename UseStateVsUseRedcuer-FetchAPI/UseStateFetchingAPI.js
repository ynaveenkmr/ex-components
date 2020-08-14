import React,{useState, useEffect} from 'react'
import axios from 'axios'

function UseStateFetchingAPI(){
  const [post, setPost] = useState([{}])
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
    <h4><u>useState Fetching API</u></h4>
     {load? 'loading...':post.title}
     {error?error:null}
    </>
  )
}

export default UseStateFetchingAPI