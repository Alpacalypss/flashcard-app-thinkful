import React, {useEffect, useState} from 'react';
import StudyNav from './StudyNav';
import {readDeck} from '../../utils/api/index';
import {useParams} from 'react-router-dom';
import StudyCard from './StudyCard';

export default function Study() {
    const [deck, setDeck] = useState({});
    const [cards, setCards] = useState([]);
    const [currentCard, setCurrentCard] = useState({})
    const {deckId} = useParams().deckId;

    useEffect(() => {
        async function fetchDeck() {
          const abortController = new AbortController();
          const response = await readDeck(deckId, abortController.signal)
          setDeck(response);
          setCards(response.cards)
          setCurrentCard(response.cards[0])
        }
        fetchDeck();
    }, [deckId])

  return (
    <div>
        <StudyNav deckId={deckId} deck={deck} />
        <h3>Study: {deck.name}</h3>
        <StudyCard cards={cards} currentCard={currentCard} setCurrentCard={setCurrentCard} deckId={deckId} />
    </div>
  )
}
