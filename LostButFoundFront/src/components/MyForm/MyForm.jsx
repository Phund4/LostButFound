/* eslint-disable react/prop-types */
import './myform.sass';

function MyForm(props) {
    return (
        <div className="form">
            <form action="/" className="form__content">
                <h1>{props.headerText}</h1>
                {props.childrens.map(child => child)}
            </form>
        </div>
    )
}

export default MyForm;