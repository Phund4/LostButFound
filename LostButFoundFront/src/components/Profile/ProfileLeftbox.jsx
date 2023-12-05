import ProfileIcon from './ProfileIcon/ProfileIcon';

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
            <ProfileIcon
                id="profile-posts"
                imgSrc="src/img/profile-posts.svg"
                imgClass="profile-fa profile-fa-posts"
            />
        </nav>
    )
}

export default ProfileLeftbox;