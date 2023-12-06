import React from 'react'
import {useHistory} from 'react-router-dom'

export default function StudyButton({deck}) {
    const history = useHistory();
  return (
    <button className="btn btn-primary" onClick={() => history.push(`/decks/${deck.id}/study`)}>
        <i className="bi bi-book"></i>Study
    </button>
  )
}
