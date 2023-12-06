import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom';
import EditDeckCancelButton from './EditDeckCancelButton';
import EditDeckNav from './EditDeckNav';
import {readDeck, updateDeck} from '../../utils/api/index';

export default function EditDeck() {
    const [deckName, setDeckName] = useState("");
    const [deckDescription, setDeckDescription] = useState("");
    const history = useHistory();
    const {deckId} = useParams().deckId;

    //API fetch, with name and description set updates and abortController
    useEffect(() => {
        async function loadDeck() {
          const abortController = new AbortController();
            const response = await readDeck(deckId, abortController.signal)
            setDeckName(response.name)
            setDeckDescription(response.description)
        }
        loadDeck();
    }, [deckId]);

    //Event handlers for change and submission with useHistory reroute on click
    function handleDeckNameChange(event) {
        setDeckName(event.target.value)
    }
    function handleDescriptionChange(event) {
        setDeckDescription(event.target.value)
    }
    const handleEditSubmit = (event) => {
    event.preventDefault();
    updateDeck({
      id: deckId,
      name: deckName,
      description: deckDescription
    }).then((updatedDeck) => history.push(`/decks/${updatedDeck.id}`));
  };

    return (
    <div>
      <EditDeckNav deckName={deckName} deckId={deckId} />
      <h2>Edit Deck</h2>
      <form onSubmit={handleEditSubmit}>
        <div className="form-group">
          <label htmlFor="deckName">Name</label>
          <input
            id="deckName"
            type="text"
            name="deckName"
            className="form-control"
            onChange={handleDeckNameChange}
            value={deckName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="deckDescription">Description</label>
          <textarea
            id="deckDescription"
            name="deckDescription"
            className="form-control"
            rows="5"
            onChange={handleDescriptionChange}
            value={deckDescription}
          />
        </div>
        <EditDeckCancelButton deckId={deckId} />
        <button type="submit" className="btn btn-success">
          <i className="bi bi-check-circle-fill"></i>Submit
        </button>
      </form>
    </div>
  );
}
