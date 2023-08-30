import { useState } from "react";
import { isWinner } from "../helpers/helpers";
import { GAME_STATUS_LOSE, GAME_STATUS_WIN } from "../constants/constants";
import { ICard, IGameState } from "../interfaces/interfaces";


export const initialGameState = {
    playerWins: 0,
    houseWins: 0,
    gamesPlayed: 0,
    currentGameStatus: '',
    gameEnded: false,
    houseCards: [],
    playerCards: []
};
export function useGameStatus(): [IGameState, {setWinner: (houseCards: ICard[], playerCards: ICard[]) => void, setGameState: ( state: IGameState) => void}] {
    const [state, setState] = useState<IGameState>(initialGameState)

    const setWinner = (houseCards: ICard[], playerCards: ICard[]) => {
        const wins = isWinner(houseCards, playerCards);
        if(wins){
            setState({...state, playerWins: (state.playerWins?? 0) + 1, gamesPlayed: (state.gamesPlayed ?? 0) + 1, currentGameStatus: GAME_STATUS_WIN, gameEnded: true})
      
        }else {
            setState({...state, houseWins: (state.playerWins?? 0) + 1, gamesPlayed: (state.gamesPlayed ?? 0) + 1, currentGameStatus: GAME_STATUS_LOSE, gameEnded: true})
        }
    }
    const setGameState = (newState: IGameState ) => {
        setState({...state, ...newState})
    }
    
    return [state, {setWinner, setGameState}];

}

export default useGameStatus;