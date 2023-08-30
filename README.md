## Simple Blackjack App

This application is created with TypeScript, NextJS, API from [`deckofcardsapi`](https://deckofcardsapi.com/), and TailwindCSS


### How to play
- Click hit button to get another card.
- Click stay button to total your score and compare with the house.
- Deal cards will deal new hands from the same decks for you and the dealer, scores won't be calculated if you don't click stay before dealing new hands. 
- Click on New Game will draw from new decks and restart entire game/scores. 

### Game rules
- The house will only get 2 cards faced up.
- If you tie with the house, you lose.
- If you get over 21, you lose.
- If you get 21 or below and also score higher than the house, you win. 

## Getting Started

First, install necessary packages

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployed
deployed at [`simple-blackjack-123`](https://simple-blackjack-123.netlify.app/) via Netlify

### Future plans
- Add to house logic. Have 1 card face down. Draw card for house if 16 or less. Include bust logic for house. 
- Handle logic if player goes through all the decks, to shuffle cards back in and deal again. 
- Add tests for helper functions
- Add a modal that show game rules and a see rules button
- Maybe even add possible splitting logic for cards of the same value. 







