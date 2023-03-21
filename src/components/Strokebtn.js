import React from 'react'
import './css/Strokebtn.css'
import { Link } from 'react-router-dom'

export default function Strokebtn(props) {
  return (
    <div>
      <Link to={props.href}><button className={props.fill}> {props.title}
      </button></Link>
    </div>
  )
}
Strokebtn.defaultProps = {
  href: '/'
}