import React from 'react';
import { useSelector } from 'react-redux';
import { selectMatchedIDs } from '../board/boardSlice.js';

export const Score = () => {
  const cardsMatched = useSelector(selectMatchedIDs);


  return (
    <div className="score-container">Matched: {cardsMatched.length}</div>
  );
};