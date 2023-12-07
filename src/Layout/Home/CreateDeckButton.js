import React from 'react';
import {useHistory} from 'react-router-dom';

function CreateDeckButton() {
    const history = useHistory();
    return (
        <button className="btn btn-success" onClick={() => history.push("/decks/new")}>
            <i className="bi bi-plus"></i>Create Deck
        </button>
    )
}

export default CreateDeckButton