import ProfileCustomPost from './ProfileCustomPost/ProfileCustomPost';
import { useEffect, useRef } from 'react';
import { getPosts } from '../../api/profile';

function ProfileConstructorInfo() {
    let posts = useRef([]);
    useEffect(() => {
        getPosts().then(result => {
            posts.current = result;
        })
    }, )
    return (
        <>
            <div className="profile-posts profile-rightbox-child hide">
                <h1>Posts</h1>
                {posts.map((el, index) =>
                        <ProfileCustomPost
                            username={el.UserName}
                            imgsrc={el.PathToIMG}
                            city={el.City}
                            district={el.District}
                            street={el.Street}
                            metro={el.Metro}
                            title={el.Name}
                            description={el.Description}
                            key={index}
                        />
                )}
            </div>
        </>

    )
}

export default ProfileConstructorInfo;