import ProfileCustomButton from '../../components/ProfileCustomButton/ProfileCustomButton';
import ProfileTextArea from '../../components/ProfileTextArea/ProfileTextArea';
import {useFormik} from 'formik'
import { getAddress } from '../../api/profile';
import { toAdditional } from './helpers';

const validate = values => {
    const errors = {};
    if (!values.address || !values.title || 
        !values.description || !values.comment) 
    {
        errors.address = 'Incorrect form';
    }
    return errors;
};


function ProfileConstructorInfo() {
    const formik = useFormik({
        initialValues: {
            address: "",
            title: "",
            description: "",
            comment: ""
        },
        validate,
        onSubmit: values => {
            const msg = getAddress();
            msg.then(response => {
                console.log(values, response);
            })
        },
    });

    return (
        <>
            <div className="profile-constructor profile-rightbox-child hide">
                <h1>Address</h1>
                <ul>
                    <li>
                        <div className="profile-block profile-contructor-block">
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
                    <li>
                        <ProfileCustomButton headerClick={toAdditional} buttonText="Next" />
                    </li>
                </ul>
            </div>
            <div className="profile-constructor-additional profile-rightbox-child hide">
                <h1>Additional Info</h1>
                <ul>
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
                    </li>
                    <li>
                        <ProfileCustomButton buttonText="Add Post" />
                    </li>
                </ul>
            </div>
        </>

    )
}

export default ProfileConstructorInfo;