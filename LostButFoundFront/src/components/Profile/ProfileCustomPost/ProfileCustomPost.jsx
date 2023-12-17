/* eslint-disable react/prop-types */
import './profile-custom-post.sass'

export default function ProfileCustomPost(props) {
    return (
        <div className="blog-card">
            <div className="meta">
                <div className="photo">
                    <img src={props.imgsrc} />
                </div>
                <ul className="details">
                    <li className="author"><a href="#">{props.username}</a></li>
                    <li className="tags">
                        <ul>
                            <li>City: <a href="#">{props.city}</a></li><br/>
                            <li>District: <a href="#">{props.district}</a></li><br/>
                            <li>Street: <a href="#">{props.street}</a></li><br/>
                            <li>Metro: <a href="#">{props.metro}</a></li><br/>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="description">
                <h3>Title: {props.title}</h3>
                <h4></h4>
                <p>Description: {props.description}</p>
                <p>Comment: {props.comment}</p>
                <p className="read-more">
                    <a href="#">I found it</a>
                </p>
            </div>
        </div>
    )
}