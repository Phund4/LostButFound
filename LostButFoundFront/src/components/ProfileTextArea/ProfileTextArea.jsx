/* eslint-disable react/prop-types */
import './profiletextarea.sass'
import { useEffect } from 'react';

function ProfileTextArea(props) {
    useEffect(() => {
        prettyTextArea();
    }, [])

    function prettyTextArea() {
        var tx = document.getElementsByClassName('profile-constructor-textarea');
        for (var i = 0; i < tx.length; i++) {
            tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
            tx[i].addEventListener("input", OnInput, false);
        }
        function OnInput() {
            this.style.height = (this.scrollHeight) + 'px';
        }
    }

    return (
        <textarea
            placeholder={props.textareaPlaceholder}
            className='profile-constructor-textarea'
        />
    )
}

export default ProfileTextArea;