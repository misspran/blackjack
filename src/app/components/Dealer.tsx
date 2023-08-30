import { FC } from "react";
import { Hands } from "./Hands";
import { IGameState } from "../interfaces/interfaces";
import { deal } from "../api/cards";

interface IProps {
    gameState: IGameState;
    setGameState: (gameState: IGameState) => void;
    deckId: string;
}

export const dealCards = async (deckId: string, setGameState: (stuff: any) => void, gameState: IGameState) => {
    if(deckId === '') return;
    const res = await deal(deckId, 4);
    const houseCards = res.cards.filter((card, index ) => index % 2 !== 0);
    const playerCards = res.cards.filter((card, index ) => index % 2 === 0);
    setGameState({...gameState, currentGameStatus: '', gameEnded: false, playerCards, houseCards})
}
export const Dealer: FC<IProps> = ({gameState, deckId, setGameState}) => {
    return (
        <div className="flex flex-col justify-center">
            <div className="flex justify-center mx-auto pt-8">
                <button className="text-black hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 mx-auto" 
                    onClick={() => dealCards(deckId, setGameState, gameState)}>
                Deal Cards
                </button>
            </div>
            <Hands cards={gameState.houseCards}/>
        </div>
    )
}

export default Dealer;