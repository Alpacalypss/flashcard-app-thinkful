import React from 'react'
import {useHistory} from 'react-router-dom'

export default function ViewButton({deck}) {
    const history = useHistory();
  return (
    <button className="btn btn-dark" onClick={() => history.push(`/decks/${deck.id}`)}>
        <i className="bi bi-eye-fill"></i>View
    </button>
  )
}
