/* eslint-disable react/prop-types */
import './profileicon.sass'
function ProfileIcon(props) {
    function ProfileIconClickHandler() {
        let rightboxChilds = document.getElementsByClassName('profile-rightbox-child');
        for (let child of rightboxChilds) {
            child.classList.add("hide");
        }
        document.querySelector(`.${props.id}`).classList.remove('hide');
    }

    return (
        <a id={props.id} onClick={ProfileIconClickHandler}>
            <img src={props.imgSrc} className={props.imgClass}/>
        </a>
    )
}

export default ProfileIcon;