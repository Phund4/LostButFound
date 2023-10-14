/* eslint-disable react/prop-types */
import {useEffect} from 'react'
import "./mytimer.sass"

function MyTimer(props) {
    useEffect(() => {
        let timer = document.getElementById('time');
        let timerText = document.getElementById('timer-text');
        startTimer(props.duration, timer, timerText);
    }, )

    function startTimer(duration, display, text) {
        var time = duration;
        var timerIntervalId = setInterval(function () {
            display.textContent = time;
            if (--time < 0) {
                text.textContent = "Send me code again";
                text.classList.add("underline-text");
                clearInterval(timerIntervalId);
            }
        }, 1000);
    }

    return (
        <>
            <div className="timer-text" id="timer-text"><span id="time">{props.duration}</span> seconds left!</div>
        </>
    )
}

export default MyTimer;