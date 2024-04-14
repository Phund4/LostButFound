/* eslint-disable react/prop-types */
import "./form-authorize.sass";

function MyForm({ onSubmit, headerText = "", childrens = [] }) {
    return (
        <div className="form">
            <form action="/" className="form__content" onSubmit={onSubmit}>
                <h1>{headerText}</h1>
                {childrens.map((child) => child)}
            </form>
        </div>
    );
}

export default MyForm;
