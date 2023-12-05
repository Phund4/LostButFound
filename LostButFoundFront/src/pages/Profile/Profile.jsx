import '../../styles/profile/profile.sass';
import ProfileUserData from '../../components/Profile/ProfileUserData';
import ProfileLeftbox from '../../components/Profile/ProfileLeftbox';
import ProfileConstructor from '../../components/Profile/ProfileConstructor';
import ProfilePosts from '../../components/Profile/ProfilePosts';

function Profile() {
    return <>
        <div className="profile-container">
            <div className="profile-leftbox">
                <ProfileLeftbox/>
            </div>
            <div className="profile-rightbox">
                <ProfileUserData/>
                <ProfileConstructor/>
                <ProfilePosts/>
            </div>
        </div>
    </>
}

export default Profile;