import '../../styles/profile/profile-posts.sass'

function ProfileConstructorInfo() {
    return (
        <>
            <div className="profile-posts profile-rightbox-child hide">
                <h1>Posts</h1>
                <div className="blog-card">
                    <div className="meta">
                        <div className="photo">
                            <img src='src/img/profile-posts.svg'/>
                        </div>
                        <ul className="details">
                            <li className="author"><a href="#">John Doe</a></li>
                            <li className="date">Aug. 24, 2015</li>
                            <li className="tags">
                                <ul>
                                    <li><a href="#">Learn</a></li>
                                    <li><a href="#">Code</a></li>
                                    <li><a href="#">HTML</a></li>
                                    <li><a href="#">CSS</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="description">
                        <h3>Learning to Code Learning to CodeLearning to CodeLearning to CodeLearning to CodeLearning to CodeLearning to Code</h3>
                        <h4>Opening a door to the future</h4>
                        <p>Description: aaaaaaaaaaaaaaaaa</p>
                        <p>Comment: bbbbbbbbbbbbbbbbbbbbb</p>
                        <p className="read-more">
                            <a href="#">Read More</a>
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProfileConstructorInfo;