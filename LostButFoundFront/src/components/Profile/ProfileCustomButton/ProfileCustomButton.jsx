/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./profile-custom-button.sass";

function ProfileCustomButton({
    handleClick,
    handleSubmit,
    type,
    className,
    buttonText,
}) {
    return (
        <button
            onClick={handleClick}
            onSubmit={handleSubmit}
            type={type}
            className={`custom-btn btn-4 ${className}`}
        >
            <span>{buttonText}</span>
        </button>
    );
}

export default ProfileCustomButton;
