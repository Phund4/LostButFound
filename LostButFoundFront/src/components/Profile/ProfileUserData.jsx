import ProfileInput from './ProfileInput/ProfileInput';
import ProfileCustomPost from './ProfileCustomPost/ProfileCustomPost'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserData, getUserPosts, deletePost } from '../../api/profile';
function ProfileUserData() {
    let navigate = useNavigate();
    const [fullname, setFullname] = useState("");
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [rating, setRating] = useState(0);
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        if (!!localStorage.getItem('token') == false) {
            navigate('/login');
        }
        getUserData().then(result => {
            setFullname(result.fullName);
            setLogin(result.login);
            setEmail(result.email);
            setRating(result.rating);
        });
        getUserPosts().then(result => {
            console.log(result)
            setUserPosts(result);
        })
    }, [navigate])

    function deletePostHandler(title) {
        deletePost(title).then(resp => {
            console.log(resp);
            setUserPosts(prevPosts => prevPosts.filter(post => post.name !== title))
        })
    }
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
                {userPosts?.map((el, ind) => {
                    return <li key={`UserPost-${ind}`}>
                        <ProfileCustomPost
                            city={el.city}
                            district={el.district}
                            street={el.street}
                            metro={el.metro}
                            username={el.userName}
                            imgSrc={el.imgsrc}
                            title={el.name}
                            description={el.description}
                            IsFoundButton={false}
                            isDeletePostButton={true}
                            DeletePostHandler={() => deletePostHandler(el.name)}
                        />
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ProfileUserData;