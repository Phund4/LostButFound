import ProfileCustomButton from './ProfileCustomButton/ProfileCustomButton';
import ProfileTextArea from './ProfileTextArea/ProfileTextArea';
import ProfileInput from './ProfileInput/ProfileInput';
import { useFormik } from 'formik'
import { getTags } from './helpers';

const validate = values => {
    const errors = {};
    if (!values.address || !values.title ||
        !values.description || !values.comment) {
        errors.address = 'Incorrect form';
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
                metro: []
            },
            title: "",
            description: "",
            comment: ""
        },
        validate,
        // onSubmit: values => {
        //     const msg = getAddress(values.address);
        //     msg.then(response => {
        //         console.log(values, response);
        //     })
        // },
    });

    return (
        <>
            <div className="profile-constructor profile-rightbox-child hide">
                <h1>Add Post</h1>
                <ul>
                    <li>
                        <div className="profile-block profile-contructor-block profile-constructor-address">
                            <p>Enter Address: <ProfileTextArea
                                textareaPlaceholder="Address"
                                name="address"
                                rows={3}
                                maxLength={70}
                                onChange={formik.handleChange}
                                value={formik.address}
                            /></p>
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
                        <ProfileCustomButton buttonText="Add Location" handleClick={() => getTags(formik.values)} />
                    </li>
                    <li>
                        <div className="profile-block profile-contructor-block">
                            <p>Title: <ProfileTextArea
                                textareaPlaceholder="Title"
                                name="title"
                                rows={1}
                                maxLength={20}
                                onChange={formik.handleChange}
                                value={formik.title}
                            /></p>
                        </div>
                        <div className="profile-block profile-contructor-block">
                            <p>Description: <ProfileTextArea
                                textareaPlaceholder="Description"
                                name="description"
                                rows={3}
                                maxLength={70}
                                onChange={formik.handleChange}
                                value={formik.description}
                            /></p>
                        </div>
                        <div className="profile-block profile-contructor-block">
                            <p>Comment: <ProfileTextArea
                                textareaPlaceholder="Comment"
                                name="comment"
                                rows={3}
                                maxLength={70}
                                onChange={formik.handleChange}
                                value={formik.comment}
                            /></p>
                        </div>
                        <div className="profile-block profile-contructor-block">
                            <p>Add Image:<input
                                type="file"
                            />
                            </p>
                        </div>
                    </li>
                    <li>
                        <ProfileCustomButton buttonText="Add Post" />
                    </li>
                </ul>
            </div>
        </>

    )
}

export default ProfileConstructor;