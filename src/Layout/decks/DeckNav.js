import React from 'react'
import {Link} from 'react-router-dom';

export default function DeckNav({deckName}) {
  return (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link to="/">
                    <i className="bi bi-home"></i>Home
                </Link> 
            </li>
            <li className="breadcrumb-item active" aria-current="page">
                {deckName}
            </li>
        </ol>
    </nav>
  )
}
