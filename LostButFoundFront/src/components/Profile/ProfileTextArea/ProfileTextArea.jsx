/* eslint-disable react/prop-types */
import './profiletextarea.sass'
import { useEffect } from 'react';
import {prettyTextArea} from './helpers'

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
            onChange={props.onChange}
            name={props.name}
            value={props.value}
        />
    )
}

export default ProfileTextArea;