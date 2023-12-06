import React from 'react';
import {Link} from 'react-router-dom';

export default function StudyNav({deckId, deck}) {
  return (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link to="/">
                    <i className="bi bi-house"></i>Home
                </Link>
            </li>
            <li className="breadcrumb-item">
                <Link to={`/decks/${deckId}`}>{deck.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
                <i className="bi bi-book"></i>Study
            </li>
        </ol>
    </nav>
  )
}
