/* eslint-disable react/prop-types */
import './profileicon.sass'
import profileIconClickHandler from './helpers';
function ProfileIcon(props) {
    return (
        <a id={props.id} onClick={() => profileIconClickHandler(props)}>
            <img src={props.imgSrc} className={props.imgClass}/>
        </a>
    )
}

export default ProfileIcon;