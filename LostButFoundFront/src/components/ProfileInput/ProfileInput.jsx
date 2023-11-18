/* eslint-disable react/prop-types */
import './profileinput.sass'
import CustomBtn from '../CustomBtn/CustomBtn';

function ProfileInput(props) {
    return (
        <li>
            <div className="profile-block">
                <p>{props.data}{props.isNeedButton ? <CustomBtn 
                    className="profile-profile-btn" 
                    buttonText="update"
                /> : <></>}</p>
                <h2>{props.textHead}</h2>
            </div>
        </li>
    )
}

export default ProfileInput;