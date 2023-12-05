import ProfileInput from './ProfileInput/ProfileInput';
import { useEffect, useState } from 'react';
import { getUserData } from '../../api/profile';
function ProfileUserData() {
    const [fullname, setFullname] = useState("");
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [rating, setRating] = useState(0);
    useEffect(() => {
        getUserData().then(result => {
            setFullname(result.fullName);
            setLogin(result.login);
            setEmail(result.email);
            setRating(result.rating);
        });
    }, [])
    return (
        <div className="profile-profile profile-rightbox-child">
            <h1>Personal Info</h1>
            <ul>
                <ProfileInput
                    data={fullname}
                    textHead="Full Name"
                    isNeedButton={false}
                />
                <ProfileInput
                    data={login}
                    textHead="Login"
                    isNeedButton={true}
                />
                <ProfileInput
                    data={email}
                    textHead="Email"
                    isNeedButton={false}
                />
                <ProfileInput
                    data={rating}
                    textHead="Rating"
                    isNeedButton={false}
                />
            </ul>
        </div>
    )
}

export default ProfileUserData;