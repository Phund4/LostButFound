/* eslint-disable react/prop-types */
import "./profileinput.sass";
import ProfileCustomButton from "../ProfileCustomButton/ProfileCustomButton";
import { updateData } from "../helpers";
function ProfileInput({ textHead, data, isNeedButton }) {
    return (
        <li>
            <div className="profile-block">
                <p id={`${textHead}-profile-userdata-field`}>{data}</p>
                {isNeedButton ? (
                    <ProfileCustomButton
                        className="profile-profile-btn"
                        buttonText="update"
                        handleClick={() =>
                            updateData(`${textHead}-profile-userdata-field`)
                        }
                    />
                ) : (
                    <></>
                )}
                <h2>{textHead}</h2>
            </div>
        </li>
    );
}

export default ProfileInput;
