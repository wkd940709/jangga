import React from 'react'
import classes from './PersonBox.module.css'
import person from '../assets/account.png'
function PersonBox({sex}) {
  return (
    <div className={classes.wrapper}>
      <img src={sex} alt="" />
    </div>
  )
}

export default PersonBox