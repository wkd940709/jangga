import React from "react";
import classes from "./ChattingPage.module.css";
import PersonBox from "../components/PersonBox";
import Button from "../components/Button";
import camera from "../assets/camera.png";
import exit from "../assets/exit.png";
import mic from "../assets/mic.png";
import background from "../assets/background.png";
import man from "../assets/man.png";
import woman from "../assets/woman.png";

const OPTIONS = [
  { text: "카메라 끄기", icon: camera },
  { text: "마이크 끄기", icon: mic },
  { text: "배경 바꾸기", icon: background },
  { text: "나가기", icon: exit },
];
function ChattingPage() {
  return (
    <div className={classes.background}>
      <div className={classes.optionBox}>
        {OPTIONS.map((option) => {
          return <Button text={option.text} icon={option.icon} />;
        })}
      </div>
      <div className={classes.contentSection}>
        <PersonBox sex={man} />
        <div className={classes.chattingBox}>
          <div className={classes.chatting}></div>
        </div>
        <PersonBox sex={woman} />
      </div>
      <div className={classes.chattingBar}>
        <div>말</div>
        <button className={classes.chattingBtn}>보내기</button>
      </div>
    </div>
  );
}

export default ChattingPage;
