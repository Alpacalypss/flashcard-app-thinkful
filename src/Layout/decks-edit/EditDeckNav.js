import React from 'react'
import {Link} from 'react-router-dom';


export default function EditDeckNav({deckName, deckId}) {
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
                    {deckName}
                </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
                Edit Deck 
            </li>
        </ol>
    </nav>
  )
}
