/* eslint-disable react/prop-types */
import './profileinput.sass'
import ProfileCustomButton from '../ProfileCustomButton/ProfileCustomButton';

function ProfileInput(props) {
    return (
        <li>
            <div className="profile-block">
                <p>{props.data}{props.isNeedButton ? <ProfileCustomButton 
                    className="profile-profile-btn" 
                    buttonText="update"
                /> : <></>}</p>
                <h2>{props.textHead}</h2>
            </div>
        </li>
    )
}

export default ProfileInput;