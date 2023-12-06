import React from 'react'


export default function NextButton({nextCard}) {
    return (
        <button className="btn btn-success mt-2" onClick={nextCard}>
            <i className="arrow-right-circle-fill"></i>Next
        </button>
  )
}
