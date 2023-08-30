export interface ICard {
    "code": string;
    "image": string;
    "value": string;
    "suit": string;
    "images"?: {
        "svg": string;
        "png": string;
    }
}

export interface ICardFace extends ICard {
    show: boolean;
}

export interface IDrawCardsResponse {
    "success": boolean;
    "deck_id": string;
    "cards": ICard[];
    "remaining": number;
}

export interface IDeckResponse {
    "success": boolean;
    "deck_id": string;
    "shuffled": boolean;
    "remaining": number;
}

export interface IGameState {
    playerWins?: number;
    houseWins?: number;
    gamesPlayed?: number;
    currentGameStatus?: string;
    gameEnded?: boolean;
    houseCards: ICard[];
    playerCards: ICard[];
}