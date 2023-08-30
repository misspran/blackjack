import { FC } from "react";
import Image from 'next/image';
import { ICard } from "../interfaces/interfaces"

interface IProps {
    cards: ICard[]
}


export const Hands: FC<IProps> = ({cards}) => {
    return (
        <div className="flex justify-center py-5 flex-wrap">
            {cards.map( (card: ICard, index: number) => 
                <Image key={index} src={card.image}  alt="Card value" width={100} height={150} className="p-1"/>
            )}
        </div>
    )
}