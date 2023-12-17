/* eslint-disable react/prop-types */
import './profileinput.sass'
import ProfileCustomButton from '../ProfileCustomButton/ProfileCustomButton';
import { updateData } from '../helpers';
function ProfileInput(props) {
    return (
        <li>
            <div className="profile-block">
                <p
                    id={`${props.textHead}-profile-userdata-field`}
                >{props.data}</p>
                {props.isNeedButton ? <ProfileCustomButton 
                    className="profile-profile-btn" 
                    buttonText="update"
                    handleClick={() => updateData(`${props.textHead}-profile-userdata-field`)}
                /> : <></>}
                <h2>{props.textHead}</h2>
            </div>
        </li>
    )
}

export default ProfileInput;