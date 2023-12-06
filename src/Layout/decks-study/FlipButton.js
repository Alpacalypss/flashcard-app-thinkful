import React from 'react'


export default function FlipButton({setFrontOfCard}) {
    
    function flipOnClick() {
        setFrontOfCard((frontSide) => !frontSide )
    }
  return (
    <button className="btn btn-secondary" onClick={flipOnClick}>
        <i className="bi bi-repeat"></i>Flip
    </button>
  )
}
