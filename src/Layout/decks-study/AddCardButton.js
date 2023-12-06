import React from 'react';
import {useHistory} from 'react-router-dom';

export default function AddCardButton({deckId}) {
    const history = useHistory();
  return (
    <button className="btn btn-dark" onClick={() => history.push(`/decks/${deckId}/cards/new`)}>
        <i className="bi bi-plus"></i>Add Card
    </button>
  )
}
