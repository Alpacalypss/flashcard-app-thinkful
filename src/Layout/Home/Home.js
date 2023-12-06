import React, {useState, useEffect} from 'react'
import { listDecks } from '../../utils/api';
import StudyButton from './StudyButton';
import DeleteDeckButton from './DeleteDeckButton';
import ViewButton from './ViewButton';
import CreateDeckButton from './CreateDeckButton';
import './Home.css'

export default function Home() {
    const [decks, setDecks] = useState([]);

    //Async wait for the API call
    useEffect(() => {
        async function fetchData() {
            const abortController = new AbortController();
            const response = await listDecks(abortController.signal)
            setDecks(response)
        }
        fetchData()
    }, [])

  return (
    <div className="home">
        <CreateDeckButton />

        {decks.map((deck, index) => {
            return (
                <div className="deck-card card mt-5" key={index}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h3 className="card-title font-weight-bold">{deck.name}</h3>
                            <h5 className="card-subtitle text-muted">{deck.cards.length} cards</h5>
                        </div>
                            <p className="card-text">{deck.description}</p>
                        <div className="d-flex">
                            <div className="mr-auto">
                                <ViewButton deck={deck} />
                                <StudyButton deck={deck} />
                            </div>
                            <div>
                                <DeleteDeckButton deck={deck} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
