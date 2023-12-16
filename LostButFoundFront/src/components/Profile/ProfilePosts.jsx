import ProfileCustomPost from './ProfileCustomPost/ProfileCustomPost';

function ProfileConstructorInfo() {
    return (
        <>
            <div className="profile-posts profile-rightbox-child hide">
                <h1>Posts</h1>
                <ProfileCustomPost
                    imgsrc={true}
                    city={true}
                    district={true}
                    street={true}
                    metro={true}
                    title={true}
                    description={true}
                    comment={true}
                />
            </div>
        </>

    )
}

export default ProfileConstructorInfo;