import ProfileInput from './ProfileInput/ProfileInput';
import ProfileCustomPost from './ProfileCustomPost/ProfileCustomPost'
import { useEffect, useState } from 'react';
import { getUserData, getUserPosts } from '../../api/profile';
function ProfileUserData() {
    const [fullname, setFullname] = useState("");
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [rating, setRating] = useState(0);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getUserData().then(result => {
            setFullname(result.fullName);
            setLogin(result.login);
            setEmail(result.email);
            setRating(result.rating);
        });
        getUserPosts().then(result => {
            setPosts(result);
        })
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
            <ul>
                {posts.map((ind, el) => {
                    return <li key={ind}>
                        <ProfileCustomPost
                            city={el.city}
                            district={el.district}
                            street={el.street}
                            metro={el.metro}
                            username={el.username}
                            imgSrc={el.imgsrc}
                            title={el.title}
                            description={el.description}
                            comment={el.comment}
                        />
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ProfileUserData;