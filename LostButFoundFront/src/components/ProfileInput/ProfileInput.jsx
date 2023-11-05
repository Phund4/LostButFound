/* eslint-disable react/prop-types */
import './profileinput.sass'
function ProfileInput(props) {
    return (
        <li>
            <div className="profile-block">
                <p>{props.data}{props.isNeedButton ? <button className="profile-btn">update</button> : <></>}</p>
                <h2>{props.textHead}</h2>
            </div>
        </li>
    )
}

export default ProfileInput;