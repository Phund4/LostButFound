/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react'
import "./codetimer.sass";

const CodeTimer = ({ seconds = 0, callback, callbackParams = [] }) => {
    const [over, setOver] = useState(false);
    const [s, setTime] = useState(seconds);

    const tick = () => {
        if (over) return;
        if (s === 1) {
            setOver(true);
        } else {
            setTime(s - 1);
        }
    };

    const reset = () => {
        setTime(parseInt(seconds));
        setOver(false);
        callback(...callbackParams)
    };

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });

    return (
        <div>
            <p className='timer-text'>{over ? "" :`Resend code in ${s.toString().padStart(1, "0")} seconds`}</p>
            <div className="timer-text underline-text" onClick={() => reset()}>{over ? "Resend code" : ""}</div>
        </div>
    );
};

export default CodeTimer;
