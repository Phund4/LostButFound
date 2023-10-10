/* eslint-disable react/prop-types */
import "./myinput.sass"

function MyInput(props) {
    return (
        <div className="form__box">
            <input
                type={props.type}
                placeholder={props.placeholder}
                className="form__input"
                id={props.id}
            />
        </div>
    )
}

export default MyInput;