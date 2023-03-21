import React from 'react'
import Strokebtn from './Strokebtn'
import './css/Footer.css'
export default function Footer() {
  return (
    <div className='footerContainer'>
      <div className="subscribe">
        <h1 className="redtxt">Don't miss out</h1>
        <label htmlFor="email">Email Address</label><br />
        <input type="email" name="email" id="email" placeholder='Type Email'/>
        <Strokebtn title='Subscribe' fill='fill btn'/>
      </div>
      <div className="info">
        <div className="infodata">
          <div className="item"><ul type="none"><li className='heading-f'>Company</li>
          <li className='footer-item'>About</li>
          <li className='footer-item'>Experts</li></ul></div>
          <div className="item"><ul type="none"><li className='heading-f'> Customer Services</li>
          <li className='footer-item'>Contact us</li>
          <li className='footer-item'>My Account</li></ul></div>
          <div className="item"><ul type="none"><li className='heading-f'>Legal</li>
          <li className='footer-item'>Contact us</li>
          <li className='footer-item'>My Account</li></ul></div>
        </div>
      <p>©Zetapass | All right reserved.</p>
      </div>
    </div>
  )
}
