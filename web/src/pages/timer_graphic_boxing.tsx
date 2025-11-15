import { useEffect, useState } from "react";
import style from "../css/timer.boxing.module.css";
import { socket } from "../socket";
import { TimerBoxing } from "./timer_control_boxing";

export default function TimerBoxingGraphic() {
  const [state, setState] = useState<TimerBoxing>({
    participant_a: "",
    participant_b: "",
    active: false,
    round: "",
    start_time: 0,
  });
  const [time, setTime] = useState(0); // 2 minutes in seconds

  function updateTime(){
    setTime((state.start_time) - Math.floor(Date.now() / 1000) + 120);
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
    function onPlay(state: TimerBoxing) {
      console.log("onPlay", state);
      setState(state);
    }

    function onStop(state: TimerBoxing) {
      console.log("onStop", state);
    }

    function onState(state: TimerBoxing) {
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
        <div className={style.participantAColour}></div>
        <div className={style.participantName}>{state.participant_a}</div>
        <div className={style.time}>
          {Math.floor(Math.max(time,0) / 60)}:{String(Math.max(time,0) % 60).padStart(2, "0")}
        </div>
        <div className={style.round}>{state.round}</div>
        <div className={style.participantName}>{state.participant_b}</div>
        <div className={style.participantBColour}></div>
      </div>
    </div>
  );
}