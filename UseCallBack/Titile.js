import React from 'react'

function Title(){
  console.log('Rendering Title')
  return(
    <div><hr /><u>useCallBack Hook</u></div>
  )
}

export default React.memo(Title)