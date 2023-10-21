/* eslint-disable react/prop-types */
import {useEffect, useRef} from 'react'
import "./mytimer.sass"

function MyTimer(props) {
    let timer = useRef(null);
    let timerText = useRef(null);
    useEffect(() => {
        startTimer(props.duration, timer.current, timerText.current);
    }, );

    function startTimer(duration, display, text) {
        var time = duration;
        var timerIntervalId = setInterval(function () {
            display.textContent = time;
            if (--time < 0) {
                text.textContent = "Send me code again";
                text.classList.add("underline-text");
                text.onclick = props.clickHandler;
                clearInterval(timerIntervalId);
            }
        }, 1000);
    }

    return (
        <>
            <div 
                className="timer-text" 
                id="timer-text" 
                ref={timerText}
            >
                <span 
                    id="time" 
                    ref={timer}
                >
                    {props.duration}
                </span> seconds left!
            </div>
        </>
    )
}

export default MyTimer;