"use client"
import React, { useEffect, useState } from 'react'
import { shuffle } from '../api/cards'
import { Player } from './Player'
import Footer from './Footer'
import { Header } from './Header'
import useGameStatus, { initialGameState } from '../hooks/useGameStatus'
import Dealer, { dealCards } from './Dealer'

const newGame = async (setDeckId: (deckId: string) => void) => {
    const res: any = await shuffle();
    setDeckId(res.deck_id)
    return res.deck_id;
}


export const BlackJackTable = () => {
    const [deckId, setDeckId] = useState('')
    const [gameState, {setWinner, setGameState}] = useGameStatus();

    useEffect(() => {
        setGameState(initialGameState)
        newGame(setDeckId);
    }, [])
    useEffect(() => {
        dealCards(deckId, setGameState, gameState)
    }, [deckId])
    return (
        <div className='w-full'>
            <Header newGame={() => {
                setGameState(initialGameState)
                newGame(setDeckId)
                }} gameState={gameState}/>
            <h1 className='text-black text-2xl text-center'>{gameState.currentGameStatus}</h1>
            <Dealer setGameState={setGameState} deckId={deckId} gameState={gameState} />
            <Player deckId={deckId} setWinner={setWinner} gameState={gameState} setGameState={setGameState}/>
            <Footer gameState={gameState}/>
        </div>
    )
}