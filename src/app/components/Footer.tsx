import { FC } from "react";
import { IGameState } from "../interfaces/interfaces";

interface IProps {
    gameState: IGameState;
}

export const Footer: FC<IProps> = ({gameState}) => {
    return (
    <footer className="fixed text-black inset-x-0 bottom-0 z-2 bg-gray-100 flex items-center justify-between py-4 w-full px-8">
        <h1 className="mx-2">Player Loss: {gameState.houseWins}</h1>
        <h1 className="mx-2">Player Wins: {gameState.playerWins}</h1>
        <h1 className="mx-2">Games Played: {gameState.gamesPlayed}</h1>
    </footer>)}

export default Footer;