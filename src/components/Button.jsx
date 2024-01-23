import React from 'react'
import person from '../assets/account.png'
import classes from './Button.module.css'

function Button({ icon, text }) {

  return (
    <div className={classes.wrapper}><img src={icon} alt="" /><span>{text}</span></div>
  )
}

export default Button