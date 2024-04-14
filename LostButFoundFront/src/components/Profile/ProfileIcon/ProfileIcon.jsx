/* eslint-disable react/prop-types */
import "./profileicon.sass";
import profileIconClickHandler from "./helpers";
function ProfileIcon({ id, imgSrc, imgClass }) {
    return (
        <a id={id} onClick={() => profileIconClickHandler(id)}>
            <img src={imgSrc} className={imgClass} />
        </a>
    );
}

export default ProfileIcon;
