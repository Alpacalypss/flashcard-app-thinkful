import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import Card from './Card';
import AddCardNav from './AddCardNav';
import AddCardConfirmButton from './AddCardConfirmButton';
import {createCard, readDeck} from '../../utils/api/index';

export default function AddCard() {
    const [deck, setDeck] = useState({});
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');
    const {deckId} = useParams().deckId

    //Event handlers
    function handleCardFrontChange(event) {
        setFront(event.target.value)
    }
    function handleCardBackChange(event) {
        setBack(event.target.value)
    }

    useEffect(() => {
        async function fetchDecks() {
            const abortController = new AbortController();
            const response = await readDeck(deckId, abortController.signal)
            setDeck(response)
        }
        fetchDecks();
    }, [deckId])

    //saving added cards
    function saveCard(event) {
        event.preventDefault();
        createCard(deckId, {sideA: front, sideB: back})
        //cleaning up after save
        setFront("")
        setBack("")
    }

    //if deck is properly fetched save a new card form, otherwise returns a Loading message
    if(deck.name) {
        return (
            <div>
                <AddCardNav deckName={deck.name} deckId={deckId} />
                <h3>{deck.name}: Add Card</h3>
                <form onSubmit={saveCard}>
                    <Card front={front} handleCardFrontChange={handleCardFrontChange} back={back} handleCardBackChange={handleCardBackChange} />
                    <AddCardConfirmButton deckId={deckId} />
                    <button className="btn btn-success" type="submit">
                        <i className="bi bi-cloud-upload-fill"></i>Save  
                    </button> 
                </form>
            </div>
        )
    }
    return "Loading..."
}
