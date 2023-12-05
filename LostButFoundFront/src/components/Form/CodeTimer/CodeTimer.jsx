/* eslint-disable react/prop-types */
import {useEffect, useRef, useState} from 'react'
import "./codetimer.sass"

function CodeTimer(props) {
    let timer = useRef(null);
    let timerText = <><span id="time" ref={timer}>{props?.duration}</span> seconds left!</>;
    let [timerState, setTimerState] = useState(timerText);
    
    useEffect(() => {
        startTimer(props?.duration, timer?.current, props.timerRef?.current);
    }, );

    const errors = {
        400: "Incorrect Code",
        404: "Something went wrong...",
        500: "Server error"
    }

    function startTimer(duration, display, text) {
        var time = duration;
        var timerIntervalId = setInterval(function () {
            display.textContent = time;
            if (--time < 0) {
                text.textContent = "Send me code again";
                text.classList.add("underline-text");
                text.onclick = resendCode;
                clearInterval(timerIntervalId);
            }
        }, 1000);
    }

    async function resendCode() {
        try {
            const response = await fetch(`https://localhost:7110/api/User/ConfirmRegister`, {
                method: "GET",
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json'
                }
            });
            setTimerState(timerText);
            startTimer(props?.duration, timer?.current, props.timerRef?.current);
            const status = response.status;
            if (errors[status]) {
                return;
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div 
                className="timer-text" 
                id="timer-text" 
                ref={props.timerRef}
            >
                {timerState}
            </div>
        </>
    )
}

export default CodeTimer;