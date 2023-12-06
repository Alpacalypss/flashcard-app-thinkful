import React from 'react'
import {useHistory} from 'react-router-dom'
import {deleteDeck} from '../../utils/api/index'

export default function DeleteDeckButton({deck}) {
    const history = useHistory();
    
    function handleClick() {
        if (window.confirm("Are you sure you want to delete this? You will not be able to recover deleted decks.")) {
            deleteDeck(deck.id)
            history.go(0)
        }
    }
    
    return (
        <button className="btn btn-danger" onClick={handleClick}>
            <i className="bi bi-trash"></i>
        </button>
  )
}
