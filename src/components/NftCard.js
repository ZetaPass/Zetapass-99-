import React from 'react'
import card1 from './Images/card.jpg'
import './css/NftCard.css'
export default function Card() {
  return (
    <div className='content'>
      <img src={card1} className='nftimg' alt="" />
      <div className="data">
        <h1>NFT Tickets</h1>
      </div>
    </div>
  )
}
