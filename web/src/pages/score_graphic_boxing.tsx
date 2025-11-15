import { useEffect, useState } from "react";
import style from "../css/score.module.css";
import { socket } from "../socket";
import { ScoreBoxing } from "./score_control_boxing";

export default function ScoreGraphicBoxing() {
  const [state, setState] = useState<ScoreBoxing>({
    team_a: "",
    team_b: "",
    score_a: 0,
    score_b: 0,
    active: false,
    round: "",
    start_time: 0,
  });
  const [time, setTime] = useState(0); // 15 minutes in seconds

  function updateTime(){
    setTime((state.start_time) - Math.floor(Date.now() / 1000) + 900);
  }

  useEffect(() => {
    console.log("useEffect");
    let timer: NodeJS.Timeout;
    
    timer = setInterval(() => {
      updateTime();
    }, 1000);

    return () => clearInterval(timer);
  }, [state.start_time]); 

  useEffect(() => {
    function onPlay(state: ScoreBoxing) {
      console.log("onPlay", state);
      setState(state);
    }

    function onStop(state: ScoreBoxing) {
      console.log("onStop", state);
    }

    function onState(state: ScoreBoxing) {
      console.log("onState", state);
      setState(state);
    }

    socket.on("score_play", onPlay);
    socket.on("score_stop", onStop);

    socket.on("score_state", onState);

    return () => {
      socket.off("score_play", onPlay);
      socket.off("score_stop", onStop);
    };
  }, []);

  return (
    <div id={style.mask}>
      <div id={style.scorebar}>
        <div className={style.teamColor}></div>
        <div className={style.teamName}>{state.team_a}</div>
        <div className={style.score}>{state.score_a}</div>
        <div className={style.time}>
          {Math.floor(Math.max(time,0) / 60)}:{String(Math.max(time,0) % 60).padStart(2, "0")}
        </div>
        <div className={style.round}>{state.round}</div>
        <div className={style.score}>{state.score_b}</div>
        <div className={style.teamName}>{state.team_b}</div>
        <div className={style.teamColor}></div>
      </div>
    </div>
  );
}