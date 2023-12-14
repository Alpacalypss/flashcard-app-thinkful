# Flashcard Study Application
A simple application, for creating and storing flashcards. The interactive application allows users to create new cards and decks, delete unwanted cards or decks, as well as study and flip through existing cards.

## Technologies
**Built With:**
  - Javascript, React, HTML, CSS, Bootstrap, Bootstrap Icons, Google Fonts

## Installation
1. Fork and clone this repository.
2. Run `npm install` to install project dependencies.
3. Run `npm run start` to concurrently start the project's frontend and backend.

## Screenshots
### Home Page
![home page screenshot](/img/home-page.JPG?raw=true "Home Page")
The home screen has the following features:
- A `Create Deck` button that will take the user to the `/decks/new` page when clicked on.
- Existing decks are shown with the deck name, the number of cards in that deck, and a `View`, `Study`, and `Delete` button.
- Clicking the `View` button will take the user to the Deck screen, `/decks/:deckId`, where more information about that particular deck is stored.
- Clicking the `Study` button will take the user to the Study screen, `decks/:deckId/study`, where the user can begin to study the cards in that deck.
- Clicking the `Delete` button will prompt a warning message to appear, and give the user the option to delete the deck or cancel this action.

### View Deck Contents
![cards in deck](/img/deck-view.JPG?raw=true "View cards in deck")
The view deck screen has the following features:
- A navigation bar with a link to the `Home` page, followed by the name of the deck.
- This screen includes the deck's name and description.
- Below the description, there are `Edit`, `Study`, `Add Cards`, and `Delete` buttons. Each button results in a different outcome when clicked on:
  * `Edit` --> Edit Deck screen, `/decks/:deckId/edit`.
  * `Study` --> Study screen, `/decks/:deckId`.
  * `Add Cards` --> Add Card screen, `decks/:deckId/cards/new`.
  * `Delete` --> Shows a warning message before deleting the deck
- Each card in the deck:
  * is listed on the page under the `Cards` heading.
  * has a `Front` and `Back` side to the card.
  * has an `Edit` button that takes the user to the Edit Card screen, `/decks/:deckId/cards/:cardId/edit`.
  * has a `Delete` button that allows that card to be deleted.

### Create New Decks
![creating new deck form](/img/create-deck.JPG?raw=true "New deck creation form")
The Create Deck screen has the following features:
- A navigation bar with a link to the `Home` page, followed by the text: `Create Deck`.
- A form is shown with the appropriate fields for creating a new deck.
- If the user cliks on the `Submit` button, the user is taken to this new deck's Deck screen.
- If the user clicks on the `Cancel` button, the user is taken back to the `Home` page.

### Front Card View
![front of card](/img/study-card-front.JPG?raw=true "Front of card view")
The front of the cards after clicking study features:
- A navigation bar with a link to the `Home` page, followed by the name of the deck.
- A question to the user 
- A `Flip` button to turn the card over and review the answer

## Back of Card View
![back of card](/img/study-card-back.JPG?raw=true "Back of card view")
The back of the cards after being flipped gives the user a few options:
- A navigation bar with a link to the `Home` page, followed by the name of the deck.
- The solution to the question
- Able to `Flip` the card back over and review the question
- A `Next` button to move the user to the next card in the `Deck`
  * When the user gets to the end of the deck, an option to `Study` again, or return to the `Home` screen pops up

### Add Cards Options
![add card](/img/add-card.JPG?raw=true "Add card screen")
Users have the ability to add cards to their existing decks with a few features:
- A  navigation bar with a link to the `Home` page, followed by the name of the deck to which cards are being added, which is also a link
to that deck's Deck screen, and finally the text: `Add Card`.
- The screen displays a form with the `Front` and `Back` fields for a new card. Both fields use a `<textarea>` tag that can accommodate multiple
lines of text.
- If the user clicks on the `Done` button, the user is taken to the Deck screen.
- If the user clicks on the `Save` button, a new card is created and associated with the relevant deck. Then, the form is cleared and the process
for adding a new card is restarted.

### Edit Existing Cards
![edit card](/img/card-edit.JPG?raw=true "Edit card screen")
he Edit Card page, `/decks/:deckId/cards/:cardId/edit`, allows the user to modify information on an existing card in a deck. This screen has the following features:
- A navigation bar with a link to the `Home` page, followed by the name of the deck of which the edited card is a member of, a link to
that deck's Deck screen, and finally the text: `Edit Card :cardId`. 
- It displays the same form as the Add Card screen, except it is pre-filled with information for the existing card. It can be edited and updated.
- If the user clicks on either the `Cancel` or `Submit` button, the user is taken back to the Deck screen.

### Edit Deck:
![edit deck screen](/img/deck-edit.JPG?raw=true "Edit deck screen")
When the user navigates to this page, `/decks/:deckId/edit`, they are able to modify information on an existing deck. The Edit Deck screen has the following features:
- A navigation bar with a link to the `Home` page, followed by the name of the deck being edited, which is also a link to that deck's Deck
screen, and lastly, the text: `Edit Deck`.
- It displays the same form as the Create Deck screen, except it is pre-filled with information for the existing deck.
- The user can edit and update the form.
- If the user clicks on the `Cancel` or the `Submit` button, the user is taken back to the Deck screen.