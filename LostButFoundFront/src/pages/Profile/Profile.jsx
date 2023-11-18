import '../../styles/profile/profile.sass';
import ProfileUserData from './ProfileUserData';
import ProfileLeftbox from './ProfileLeftbox';
import ProfileConstructorInfo from './ProfileConstructorInfo';


function Profile() {
    return <>
        <div className="profile-container">
            <div className="profile-leftbox">
                <ProfileLeftbox/>
            </div>
            <div className="profile-rightbox">
                <ProfileUserData/>
                <ProfileConstructorInfo/>
            </div>
        </div>
    </>
}

export default Profile;