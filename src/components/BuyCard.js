import React from 'react'
import classNames from 'classnames'
import card1 from "./Images/card.jpg";
import "./css/BuyCard.css";
import Strokebtn from './Strokebtn';
export default function Card(props) {
  return (
    <div className={classNames('Card', props.cls)}>
      <img src={card1} className='cardimg' alt="" />
      <div className="data">
        <h1>Intro</h1>
        <Strokebtn title='Buy Ticket' href={props.href} fill='btn'/>
      </div>
    </div>
  )
}