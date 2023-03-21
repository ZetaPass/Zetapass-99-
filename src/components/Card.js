import React from 'react'
import classNames from 'classnames'
import card1 from "./Images/card.jpg";
import "./css/Card.css";
export default function Card(props) {
  return (
    <div className={classNames('Card', props.cls)}>
      <img src={card1} className='cardimg' alt="" />
      <div className="data">
        <h1>NFT Tickets</h1>
      </div>
    </div>
  )
}