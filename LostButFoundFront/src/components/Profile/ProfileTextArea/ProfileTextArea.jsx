/* eslint-disable react/prop-types */
import './profiletextarea.sass'
import { useEffect } from 'react';
import {prettyTextArea, keyDownHandler} from './helpers'

function ProfileTextArea(props) {
    useEffect(() => {
        () => prettyTextArea();
    }, [])

    return (
        <textarea
            placeholder={props.textareaPlaceholder}
            className='profile-constructor-textarea'
            rows={props.rows}
            maxLength={props.maxLength}
            onKeyDown={() => keyDownHandler()}
            onChange={props.onChange}
            name={props.name}
        />
    )
}

export default ProfileTextArea;