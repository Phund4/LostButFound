/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './custombtn.sass'

function CustomBtn(props) {
    return (
        <button className="custom-btn btn-4"><span>{props.buttonText}</span></button>
    )
}

export default CustomBtn;