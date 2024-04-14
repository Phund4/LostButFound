import ProfileCustomPost from './ProfileCustomPost/ProfileCustomPost';
import { useEffect, useState} from 'react';
import { getPosts } from '../../api/profile';

function ProfileConstructorInfo() {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(result => {
            setPosts(result);
        })
    }, [])
    return (
        <>
            <div className="profile-posts profile-rightbox-child hide">
                <h1>Posts</h1>
                {posts?.map((el, index) =>
                        <ProfileCustomPost
                            username={el.userName}
                            imgsrc={el.pathToIMG}
                            city={el.city}
                            district={el.district}
                            street={el.street}
                            metro={el.metro}
                            title={el.name}
                            description={el.description}
                            key={index}
                        />
                )}
            </div>
        </>

    )
}

export default ProfileConstructorInfo;