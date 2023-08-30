/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import { deal } from "../api/cards";
import { playerLogic } from "../helpers/helpers";
import { ICard, IGameState } from "../interfaces/interfaces";
import { Hands } from "./Hands";

interface IProps {
    deckId: string;
    gameState: IGameState,
    setGameState: (gameState: IGameState) => void;
    setWinner(houseCards: ICard[], playerCards: ICard[]): void;
}

export const Player: FC<IProps> = ({deckId, setGameState, setWinner, gameState}) => {
    const hit = async() => {
        if(gameState.gameEnded) return;
        const res = await deal(deckId, 1);
        setGameState({...gameState, playerCards: [...gameState.playerCards, ...res.cards]})
    }
    useEffect(() => {
        const total = playerLogic(gameState.playerCards);
        if(total === 21 || total > 21) {
            setWinner(gameState.houseCards, gameState.playerCards)
        }
    }, [gameState.playerCards])
    return (
        <div className="flex flex-col justify-center">
            <Hands cards={gameState.playerCards}/>
            <div className="flex w-full justify-center mx-auto pb-8">
            <button className="text-black hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                onClick={hit}> Hit</button> 
            <button 
                className="text-black hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                onClick={() => {
                    if(gameState.gameEnded) return;
                    setWinner(gameState.houseCards, gameState.playerCards)
                }}> Stay</button>

            </div>
        </div>
    )
}