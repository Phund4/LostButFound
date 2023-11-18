import '../../styles/profile/profile.sass';
import { useEffect, useState } from 'react';
import ProfileIcon from '../../components/ProfileIcon/ProfileIcon';
import ProfileInput from '../../components/ProfileInput/ProfileInput';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
import ProfileTextArea from '../../components/ProfileTextArea/ProfileTextArea';

function Profile() {
    const [fullname, setFullname] = useState("");
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [rating, setRating] = useState(0);
    useEffect(() => {
        const data = getUserData();
        setFullname(data.fullname);
        setLogin(data.login);
        setEmail(data.email);
        setRating(data.rating);
    }, [])

    async function getUserData() {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch("https://localhost:7110/api/User/GetCurrentUser", {
                method: "GET",
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json',
                    "Authorization": `Bearer ${token}`
                }
            })
            const result = await response.json();
            console.log(result);
            return result;
        } catch (error) {
            return null;
        }
    }

    return <>
        <div className="profile-container">
            <div className="profile-leftbox">
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
            </div>
            <div className="profile-rightbox">
                <div className="profile-profile profile-rightbox-child">
                    <h1>Personal Info</h1>
                    <ul>
                        <ProfileInput
                            data={fullname}
                            textHead="Full Name"
                            isNeedButton={true}
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
                <div className="profile-constructor profile-rightbox-child hide">
                    <h1>Add post</h1>
                    <div className='profile-constructor-checks hide'>
                        <ul>
                            <li>
                                <div className="profile-block profile-constructor-block">

                                </div>
                            </li>
                            <li>
                                <CustomBtn buttonText="Next" />
                            </li>
                        </ul>
                    </div>
                    <div className="profile-constructor-inputs">
                        <ul>
                            <li>
                                <div className="profile-block profile-contructor-block">
                                    <p>Title: <ProfileTextArea
                                        textareaPlaceholder="Title"
                                        rows={1}
                                        maxLength={20}
                                    /></p>
                                </div>
                                <div className="profile-block profile-contructor-block">
                                    <p>Description: <ProfileTextArea
                                        textareaPlaceholder="Description"
                                        rows={3}
                                        maxLength={50}
                                    /></p>
                                </div>
                                <div className="profile-block profile-contructor-block">
                                    <p>Comment: <ProfileTextArea
                                        textareaPlaceholder="Comment"
                                        rows={3}
                                        maxLength={50}
                                    /></p>
                                </div>
                            </li>
                            <li>
                                <CustomBtn buttonText="Add Post" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Profile;