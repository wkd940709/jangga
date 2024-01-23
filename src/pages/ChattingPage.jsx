import React from 'react';
import classes from './ChattingPage.module.css';
import PersonBox from '../components/PersonBox';
import Button from '../components/Button';

function ChattingPage() {
  return (
    <div className={classes.background}>
      <div className={classes.contentSection}>
        <PersonBox />
        <div className={classes.chattingBox}>
          <div className={classes.chatting}></div>
          <div className={classes.chattingBar}>채팅</div>
        </div>
        <PersonBox />
      </div>
      <div className={classes.optionBox}>

        <Button />
      </div>
    </div>
  );
}

export default ChattingPage;
