import ProfileCustomPost from './ProfileCustomPost/ProfileCustomPost';
import { useEffect, useState} from 'react';
import { getPosts } from '../../api/profile';
import { useInView } from 'react-intersection-observer';

function ProfileConstructorInfo() {
    const [ref, inView] = useInView();
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        if (inView) {
            getPosts().then(result => {
                setPosts(result);
            })
        }
    }, [inView])
    return (
        <>
            <div className="profile-posts profile-rightbox-child hide" ref={ref}>
                <h1>Posts</h1>
                {typeof posts == Object ? posts?.map((el, index) =>
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
                ) : []}
            </div>
        </>

    )
}

export default ProfileConstructorInfo;