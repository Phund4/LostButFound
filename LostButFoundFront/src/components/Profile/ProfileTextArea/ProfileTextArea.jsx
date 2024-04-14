/* eslint-disable react/prop-types */
import "./profiletextarea.sass";
import { useEffect } from "react";
import { prettyTextArea } from "./helpers";

function ProfileTextArea({
    textareaPlaceholder,
    rows,
    maxLength,
    onChange,
    name,
    value,
}) {
    useEffect(() => {
        () => prettyTextArea();
    }, []);

    return (
        <textarea
            placeholder={textareaPlaceholder}
            className="profile-constructor-textarea"
            rows={rows}
            maxLength={maxLength}
            onChange={onChange}
            name={name}
            value={value}
        />
    );
}

export default ProfileTextArea;
