/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './profile-custom-button.sass'

function ProfileCustomButton(props) {
    return (
        <button onClick={props?.handleClick} type={props.type} className={`custom-btn btn-4 ${props.className}`}><span>{props.buttonText}</span></button>
    )
}

export default ProfileCustomButton;