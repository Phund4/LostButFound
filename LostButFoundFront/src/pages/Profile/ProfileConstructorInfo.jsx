import ProfileCustomButton from '../../components/ProfileCustomButton/ProfileCustomButton';
import ProfileTextArea from '../../components/ProfileTextArea/ProfileTextArea';

function ProfileConstructorInfo() {
    return (
        <div className="profile-constructor profile-rightbox-child hide">
            <h1>Personal Info</h1>
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
                    <ProfileCustomButton buttonText="Add Post" />
                </li>
            </ul>
        </div>
    )
}

export default ProfileConstructorInfo;