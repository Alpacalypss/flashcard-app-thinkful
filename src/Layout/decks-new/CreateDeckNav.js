import React from 'react';
import {Link} from 'react-router-dom';

export default function CreateDeckNav() {
  return (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link to="/">
                    <i className="bi bi-house"></i>Home
                </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
                Create Deck                
            </li>
        </ol>
    </nav>
  )
}
