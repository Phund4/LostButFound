import ProfileIcon from '../../components/ProfileIcon/ProfileIcon';

function ProfileLeftbox() {
    return (
        <nav>
            <ProfileIcon
                id="profile-profile"
                imgSrc="src/img/profile-human.svg"
                imgClass="profile-fa profile-fa-user"
            />
            <ProfileIcon
                id="profile-constructor"
                imgSrc="src/img/profile-constructor.svg"
                imgClass="profile-fa profile-fa-constructor"
            />
        </nav>
    )
}

export default ProfileLeftbox;