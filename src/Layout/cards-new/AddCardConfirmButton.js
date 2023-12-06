import React from 'react';
import {useHistory} from 'react-router-dom';

export default function AddCardConfirmButton({deckId}) {
    const history = useHistory();

    return (
        <button className="btn btn-primary" onClick={() => history.push(`/decks/${deckId}`)}>
            <i className="bi bi-check-circle"></i>Add Card
        </button>
  )
}
