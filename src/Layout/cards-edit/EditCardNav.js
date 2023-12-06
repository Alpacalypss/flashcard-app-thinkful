import React from 'react'
import {Link} from 'react-router-dom'

export default function EditCardNav({deckName, deckId, cardId}) {
  return (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link to="/">
                    <i className="bi bi-house"></i>Home
                </Link>
            </li>
            <li className="breadcrumb-item">
                <Link to={`/decks/${deckId}`}>
                    Deck: {deckName}
                </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
                Edit Card {cardId}
            </li>
        </ol>
    </nav>
  )
}
