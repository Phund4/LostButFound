import ProfileCustomButton from "./ProfileCustomButton/ProfileCustomButton";
import ProfileTextArea from "./ProfileTextArea/ProfileTextArea";
import ProfileInput from "./ProfileInput/ProfileInput";
import { useFormik } from "formik";
import { getTags, hideTags } from "./helpers";
import { addPost } from "../../api/profile";

const validate = (values) => {
    const errors = {};
    if (
        !values.title ||
        !values.description ||
        !values.tags.city ||
        !values.tags.district ||
        !values.tags.street ||
        !values.tags.metro
    ) {
        errors.form = "Incorrect form";
    }
    return errors;
};

function ProfileConstructor() {
    const formik = useFormik({
        initialValues: {
            address: "",
            tags: {
                city: "",
                district: "",
                street: "",
                metro: [],
            },
            title: "",
            description: "",
            file: new File([], ""),
        },
        validate,
        onSubmit: (values) => {
            addPost(values).then((response) => {
                console.log(response);
                alert("Post successfully added!");
                formik.resetForm();
            });
        },
    });

    return (
        <>
            <form
                action="/"
                className="profile-constructor profile-rightbox-child hide"
                onSubmit={formik.handleSubmit}
            >
                <h1>Add Post</h1>
                <ul>
                    <li>
                        <div className="profile-block profile-contructor-block profile-constructor-address">
                            <p>
                                Enter Address:{" "}
                                <ProfileTextArea
                                    textareaPlaceholder="Address"
                                    name="address"
                                    rows={3}
                                    maxLength={70}
                                    onChange={formik.handleChange}
                                    value={formik.values.address}
                                />
                            </p>
                        </div>
                    </li>
                    <div className="profile-block profile-contructor-block profile-constructor-tags hide">
                        <ProfileInput
                            data={formik.values.tags.city}
                            textHead="City"
                            isNeedButton={false}
                        />
                        <ProfileInput
                            data={formik.values.tags.district}
                            textHead="District"
                            isNeedButton={false}
                        />
                        <ProfileInput
                            data={formik.values.tags.street}
                            textHead="Street"
                            isNeedButton={false}
                        />
                        <ProfileInput
                            data={formik.values.tags.metro}
                            textHead="Metro"
                            isNeedButton={false}
                        />
                    </div>
                    <li>
                        <ProfileCustomButton
                            className="constructor-button-location"
                            type="button"
                            buttonText="Add Location"
                            handleClick={() => getTags(formik, formik.values.address)}
                        />
                    </li>
                    <li>
                        <ProfileCustomButton
                            className="constructor-button-retry hide"
                            type="button"
                            buttonText="Retry"
                            handleClick={() => hideTags()}
                        />
                    </li>
                    <li>
                        <div className="profile-block profile-contructor-block">
                            <p>
                                Title:{" "}
                                <ProfileTextArea
                                    textareaPlaceholder="Title"
                                    name="title"
                                    rows={1}
                                    maxLength={20}
                                    onChange={formik.handleChange}
                                    value={formik.values.title}
                                />
                            </p>
                        </div>
                        <div className="profile-block profile-contructor-block">
                            <p>
                                Description:{" "}
                                <ProfileTextArea
                                    textareaPlaceholder="Description"
                                    name="description"
                                    rows={3}
                                    maxLength={100}
                                    onChange={formik.handleChange}
                                    value={formik.values.description}
                                />
                            </p>
                        </div>
                        <div className="profile-block profile-contructor-block">
                            <p>
                                Add Image:
                                <input
                                    type="file"
                                    name="file1"
                                    onChange={(event) => {
                                        formik.setFieldValue('file', event.target.files[0])
                                    }}
                                />
                            </p>
                            <canvas
                                id="constructor-canvas"
                                name="file"
                                value={formik.values.file}
                            />
                        </div>
                    </li>
                    <li>
                        <ProfileCustomButton
                            type="submit"
                            buttonText="Add Post"
                        />
                    </li>
                </ul>
            </form>
        </>
    );
}

export default ProfileConstructor;
