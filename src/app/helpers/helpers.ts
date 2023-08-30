import { ICard } from "../interfaces/interfaces"


// Since "The House is initially dealt TWO face up cards and no more!" Ace dealt for the house is always at maxed value 11.
export const houseLogic = (cards: ICard[]): number => {
    const total = cards.reduce(( acc: number, card: ICard) => {
        const cardValue = card.value;
        const num = parseInt(cardValue);
        if(cardValue === 'ACE'){
            return acc += 11;
        }else{
            return acc += Number.isNaN(num) ? 10 : num;
        }
    }, 0) as number;
    return total;
}
// If cards does not include Aces, convert all face cards to 10 if any, and add up all card values. 
export const playerLogic = (cards: ICard[]): number => {
    const includesACE = cards.filter(card => card.value === 'ACE')
    if(includesACE.length){
       const totalNonAces =  cards.filter(card => card.value !== 'ACE').reduce((acc, card) => acc += Number.isNaN(parseInt(card.value))? 10: parseInt(card.value), 0)
       // If there is only 1 ace and total on non-aces cards is less or equal to 10, assume that ace card value is 11 for highest number value.
       // If there is 2 aces and total of non-aces sums up to 9 or less, assume one 11 and one 1 value for maximum number value
       // Otherwise assume all aces are 1 values as mathematically they'll be pushing score over 21
       return includesACE.length === 1 ? totalNonAces <= 10? totalNonAces + 11: totalNonAces + includesACE.length : includesACE.length == 2 && totalNonAces <= 9? totalNonAces + 11 + 1:  totalNonAces + includesACE.length ;
    }
    return !includesACE.length? cards.reduce((acc, card) => acc += Number.isNaN(parseInt(card.value)) ? 10 : parseInt(card.value), 0) : 0;
}


export const isWinner = (houseCards: ICard[], playerCards: ICard[]) => {
    const houseTotal = houseLogic(houseCards);
    const playerTotal = playerLogic(playerCards);
    if(playerTotal > 21) return false;
    if(playerTotal < 21 && houseTotal > playerTotal) return false;
    if(playerTotal === houseTotal) return false;
    if(playerTotal === 21 && houseTotal !== 21) return true;
    if(playerTotal < 21 && houseTotal < playerTotal) return true;
}