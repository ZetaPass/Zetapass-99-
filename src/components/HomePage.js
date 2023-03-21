import React from 'react'
// import { Card } from './Card'
import './css/HomePage.css'
import Strokebtn from './Strokebtn'
import NftCard from './NftCard'
import Card from './Card'
import Navbar from "./Navbar";
import GradientBall from './GradientBall'
export default function HomePage() {
  return (
    <div className='HomePage'>
      <GradientBall ball="ball1" />
      <GradientBall ball="ball2" />
      <GradientBall ball="ball3" />
      <GradientBall ball="ball4" />
      <div className='container'>
      <Navbar />
        <div className="front">
          <div className="headline">
            <h1>We give you kick start into <span className='grad-text'>web3</span> with <span className='grad-text'>Meet-up's</span>, <span className='grad-text'>Hackathons</span> and our exclusive <span className='grad-text'>courses</span>.</h1>
            <div className="buttons">
              <Strokebtn title="Create Event" fill="fill btn" />
              <Strokebtn title="Get Ticket" fill="btn" />
            </div>
          </div>
          <div className="nft-card">
            <NftCard />
          </div>
        </div>
        <div className="event-info">
          <div className="info-left">
            <h1>
              Join the <span className='grad-text'>Events</span>
            </h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo asperiores maiores optio vitae enim aliquid. Doloremque, expedita eligendi sit vitae quaerat repellendus ratione! Magnam, iusto esse. Maiores doloremque eligendi laborum nesciunt, tempora sit fuga, quas doloribus, animi consequuntur rerum alias sed atque quos officiis excepturi eius earum vel ab molestiae!</p>
            <Strokebtn title="Explore Events" href='/event' fill="fill btn" />
          </div>
          <div className="info-right">
            <Card cls="card1" />
            <Card cls="card2" />
            <Card cls="card3" />
          </div>
        </div>
      </div>
    </div>
  )
}

// export default HomePage;
