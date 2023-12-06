import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home/Home";
import Study from "./decks-study/Study";
import AddCard from "./cards-new/AddCard";
import EditCard from "./cards-edit/EditCard";
import CreateDeck from "./decks-new/CreateDeck";
import EditDeck from "./decks-edit/EditDeck";
import Deck from './decks/Deck'
import './index.css'

import {Switch, Route} from 'react-router-dom';


function Layout() {
  return (
    <>
      <Header />
      <div className="container card">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/decks/new">
            <CreateDeck />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>

          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>

          <Route path="/decks/:deckId/study">
            <Study />
          </Route>

          <Route path="/decks/:deckId">
            <Deck />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
