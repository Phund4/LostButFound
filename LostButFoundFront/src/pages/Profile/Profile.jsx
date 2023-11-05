import '../../styles/profile/profile.sass';
import {useEffect} from 'react';
import ProfileIcon from '../../components/ProfileIcon/ProfileIcon';
import ProfileInput from '../../components/ProfileInput/ProfileInput';

function Profile() {
    useEffect(() => {
        getUserData();
    }, )
    async function getUserData() {
        try{
            const response = await fetch("https://localhost:7110/api/User/GetCurrentUser", {
                method: "GET",
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json'
                }
            })
            console.log(response.body);
            return response.body;
        } catch(error) {
            console.log(error);
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
                            data="Full Name"
                            textHead="Full Name"
                            isNeedButton={true}
                        />
                        <ProfileInput
                            data="Login"
                            textHead="Login"
                            isNeedButton={true}
                        />
                        <ProfileInput
                            data="Email"
                            textHead="Email"
                            isNeedButton={false}
                        />
                        <ProfileInput
                            data="Rating"
                            textHead="Rating"
                            isNeedButton={false}
                        />
                    </ul>
                </div>
                <div className="profile-constructor profile-rightbox-child hide">
                    <h1>Add post</h1>
                    <ul>
                        <li>
                            <div className="profile-block profile-contructor-block">
                                <p>Title: <input
                                    placeholder="Title"
                                />
                                </p>
                                
                            </div>
                            <div className="profile-block profile-contructor-block">
                                <p>Comment: <input
                                    placeholder="Comment"
                                />
                                </p>
                                
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default Profile;