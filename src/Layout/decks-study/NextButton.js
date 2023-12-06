import React from 'react'


export default function NextButton({NextCard}) {
    return (
        <button className="btn btn-success mt-2" onClick={NextCard}>
            <i className="arrow-right-circle-fill"></i>Next
        </button>
  )
}
