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
                    <li className="author"><a href="#"></a></li>
                    <li className="date"></li>
                    <li className="tags">
                        <ul>
                            <li><a href="#">{props.city}</a></li>
                            <li><a href="#">{props.district}</a></li>
                            <li><a href="#">{props.street}</a></li>
                            <li><a href="#">{props.metro}</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="description">
                <h3>{props.title}</h3>
                <h4></h4>
                <p>Description: {props.description}</p>
                <p>Comment: {props.comment}</p>
                <p className="read-more">
                    <a href="#">Read More</a>
                </p>
            </div>
        </div>
    )
}