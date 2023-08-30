import { FC } from "react";
import { IGameState } from "../interfaces/interfaces";

interface IProps {
    gameState: IGameState;
    newGame(): void;
}

export const Header: FC<IProps> = ({newGame, gameState}) => {
    return (
        <header className="inset-x-0 top-0 z-2 bg-gray-100 text-black flex justify-between py-2 px-8 items-center">
            <button className="text-black hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 my-auto" 
            onClick={newGame}>New Game</button>
            <h1 className="text-black font-bold text-xl">Black Jack</h1>
        </header>
    )
}

export default Header;