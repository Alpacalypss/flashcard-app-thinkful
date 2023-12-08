import React, { useEffect, useState } from "react";
import { Route, useParams, useRouteMatch } from "react-router-dom";
import { readDeck } from "../../utils/api/index";

import DeckNav from "./DeckNav";
import DeckInfo from "./DeckInfo";

export default function DeckScreen() {
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);

  const {deckId} = useParams();
  const { url } = useRouteMatch();

  // loading the specified deck from the API
  useEffect(() => {
    async function fetchDeck() {
      const abortController = new AbortController();
      const response = await readDeck(deckId, abortController.signal);
      setDeck(response)
      setCards(response.cards)
    }
    fetchDeck()
  }, [deckId]);

  // If the deck has been fetched from the API, the breadcrumb nav bar and deck info will display
  if (deck.name) {
    return (
      <div>
        <DeckNav deckName={deck.name} />
        <Route path={url}>
          <DeckInfo
            deckName={deck.name}
            deckDescription={deck.description}
            deckId={deckId}
            cards={cards}
            url={url}
          />
        </Route>
      </div>
    );
  }
  return "Loading...";
}