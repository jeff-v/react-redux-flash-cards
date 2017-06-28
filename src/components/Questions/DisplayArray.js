import React from 'react'

const DisplayArray = (props) => {
  const stackIsFinished = props.stackIsFinished
  const finalArray = props.finalArray
  const newArray = props.newArray
  function choose() { if (stackIsFinished) {
    return finalArray
  } else {
    return newArray
  }
}
return(
  <div>
    {choose}
  </div>
  )
}


export default DisplayArray
