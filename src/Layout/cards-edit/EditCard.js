import React, {useState, useEffect} from 'react';
import EditCancelButton from './EditCancelButton';
import Card from '../cards-new/Card';
import EditCardNav from './EditCardNav';
import {useParams, useHistory} from 'react-router-dom';
import {readDeck, readCard, updateCard} from '../../utils/api/index'

export default function EditCard() {
    const [deck, setDeck] = useState({});
    const [existingCard, setExistingCard] = useState({});
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');

    const {cardId, deckId} = useParams()
    const history = useHistory();

    useEffect(() => {
        //Calling API for card and deck data with abortControllers
        async function fetchDeck() {
            const abortController = new AbortController();
            const response = await readDeck(deckId, abortController.signal)
            setDeck(response)
        }
        async function fetchCards() {
            const abortController = new AbortController();
            const response = await readCard(cardId, abortController.signal)
            setExistingCard(response)
            setFront(response.front)
            setBack(response.back)
        }
        fetchDeck();
        fetchCards();
    }, [deckId, cardId])

    //event handlers for setting front and back of card faces
    function handleCardFrontChange(event) {
        setFront(event.target.value)
    }
    function handleCardBackChange(event) {
        setBack(event.target.value)
    }
    //handler for submit button being pushed with appropriate reroute
    function submitHandler(event) {
        event.preventDefault();
        updateCard({...existingCard, sideA: front, sideB: back})
        .then((updatedCard) => history.push(`/decks/${updatedCard.deckId}`))
    }

    return (
        <div>
            <EditCardNav deckName={deck.name} deckId={deckId} cardId={cardId} />
            <h3>Edit Card</h3>
            <form onSubmit={submitHandler}>
                <Card front={front} handleCardFrontChange={handleCardFrontChange} back={back} handleCardBackChange={handleCardBackChange} />
                <EditCancelButton deckId={deckId} />
                <button type="submit" className="btn btn-success">
                    <i className="bi bi-check-circle-fill"></i>Submit
                </button>
            </form>
        </div>
    )
}
