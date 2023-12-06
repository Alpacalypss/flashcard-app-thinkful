import React from 'react'
import {useHistory} from 'react-router-dom';
import DeckCards from './DeckCards'
import DeckDeleteButton from './DeckDeleteButton';

export default function DeckInfo({ deckName, deckDescription, deckId, cards, url }) {
    const history = useHistory();

    return (
      <div>
        <h2>{deckName}</h2>
        <p>{deckDescription}</p>
        <div className="d-flex mb-4">
          <div className="mr-auto">
            <button
              type="button"
              className="btn btn-dark mr-2"
              onClick={() => history.push(`/decks/${deckId}/edit`)}
            >
              <i className="bi bi-pencil"></i>Edit
            </button>
            <button
              type="button"
              className="btn btn-primary mr-2"
              onClick={() => history.push(`/decks/${deckId}/study`)}
            >
              <i className="bi bi-book"></i> Study
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => history.push(`/decks/${deckId}/cards/new`)}
            >
              <i className="bi bi-plus"></i>Add Cards
            </button>
          </div>
          <div>
            <DeckDeleteButton deckId={deckId} />
          </div>
        </div>
  
        <div>
          <h3>Cards</h3>
          {/* Renders the cards in the deck and the edit card and delete card buttons */}
          <DeckCards cards={cards} deckId={deckId} url={url} />
        </div>
      </div>
    );
  }
