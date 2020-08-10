import React from 'react'

function Title(){
  console.log('Rendering Title')
  return(
    <div>
    <hr />
    <p>useCallBack & React.memo will stop unwatted re-render of other components</p>
    <u>useCallBack Hook</u>
    </div>
  )
}

export default React.memo(Title)