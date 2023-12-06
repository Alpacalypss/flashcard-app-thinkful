import React from 'react'
import {useHistory} from 'react-router-dom'

export default function EditCancelButton({deckId}) {
    const history = useHistory();

    return (
        <button className="btn btn-secondary" onClick={() => history.push(`/decks/${deckId}`)}>
            <i className="bi bi-file-excel-fill"></i>Cancel
        </button>
  )
}
