/* eslint-disable react/prop-types */
import "./profile-custom-post.sass";

export default function ProfileCustomPost({
    imgsrc,
    username,
    city,
    district,
    street,
    metro,
    title,
    description,
    isDeletePostButton = false,
    IsFoundButton = false,
    DeletePostHandler,
}) {
    return (
        <div className="blog-card">
            <div className="meta">
                <div className="photo">
                    <img src={imgsrc} />
                </div>
                <ul className="details">
                    <li className="author">
                        <a href="#">{username}</a>
                    </li>
                    <li className="tags">
                        <ul>
                            <li>
                                City: <a href="#">{city}</a>
                            </li>
                            <br />
                            <li>
                                District: <a href="#">{district}</a>
                            </li>
                            <br />
                            <li>
                                Street: <a href="#">{street}</a>
                            </li>
                            <br />
                            <li>
                                Metro: {metro.map(el => {<a href="#">{el    }</a>})}
                            </li>
                            <br />
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="description">
                <h3>Title: {title}</h3>
                <h4></h4>
                <p>Description: {description}</p>
                {IsFoundButton ? <p className="read-more">
                    <a href="#">I found it</a>
                </p> : <></>}
                {isDeletePostButton ? <p className="read-more" onClick={DeletePostHandler}>
                    <a href="#">Delete Post</a>
                </p> : <></>}
            </div>
        </div>
    );
}
