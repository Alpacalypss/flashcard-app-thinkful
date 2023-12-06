import React, {useState} from 'react'
import CreateDeckCancelButton from './CreateDeckCancelButton'
import CreateDeckNav from './CreateDeckNav'
import {useHistory} from 'react-router-dom'
import { createDeck } from '../../utils/api'

export default function CreateDeck() {
    const [deckName, setDeckName] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();

    //Event handlers including submission
    function handleDeckNameChange(event) {
        setDeckName(event.target.value)
    }
    function handleDescriptionChange(event) {
        setDescription(event.target.value)
    }
    function handleCreateDeckSubmit(event) {
        event.preventDefault();
        createDeck({
            name: deckName,
            description: description,
        }).then((createdDeck) => history.push(`/decks/${createdDeck.id}`))
    }
    return (
        <div>
            <CreateDeckNav />
            <h3>Create Deck</h3>
            <form onSubmit={handleCreateDeckSubmit}>
                <div className="form-group">
                    <label htmlFor="deckName">Name</label>
                        <input
                            id="deckName"
                            type="text"
                            name="deckName"
                            className="form-control"
                            placeholder="Name of your new deck"
                            rows="5"
                            onChange={handleDeckNameChange}
                            value={deckName}
                        />
                <div>
                    <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            className="form-control"
                            placeholder="A description of your deck"
                            rows="5"
                            onChange={handleDescriptionChange}
                            value={description}
                        />
                </div>
                    <CreateDeckCancelButton />
                    <button type="submit" className="btn btn-success">
                        <i className="bi bi-check-circle-fill"></i>Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
