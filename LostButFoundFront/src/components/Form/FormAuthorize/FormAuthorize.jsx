/* eslint-disable react/prop-types */
import './form-authorize.sass';

function MyForm(props) {
    return (
        <div className="form">
            <form action="/" className="form__content" onSubmit={props.onSubmit}>
                <h1>{props?.headerText}</h1>
                {props?.childrens.map(child => child)}
            </form>
        </div>
    )
}

export default MyForm;