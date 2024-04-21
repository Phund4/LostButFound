import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import FormInputAuthorize from '../components/Form/FormInputAuthorize/FormInputAuthorize';
import FormButtonAuthorize from '../components/Form/FormButtonAuthorize/FormButtonAuthorize';
import FormAuthorize from '../components/Form/FormAuthorize/FormAuthorize'
import { updatePassword } from '../api/updateUserPassword';

const validate = values => {
    const errors = {};

    if (!values.updatePassword || values.updatePassword.length < 6 ||
        values.repeatUpdatePassword !== values.updatePassword) {
        errors.fullname = 'Incorrect form';
    }

    return errors;
};

const UpdateUserPassword = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            updatePassword: '',
            repeatUpdatePassword: ''
        },
        validate,
        onSubmit: values => {
            const msg = updatePassword(values.updatePassword);
            msg.then(resp => {
                if (resp == 'Done') {
                    navigate('/login');
                    return;
                }
                document.getElementById('updatepassword-status-error').textContent = resp;
            }).catch(resp => {
                document.getElementById('updatepassword-status-error').textContent = resp;
            })
        },
    });

    const password = <FormInputAuthorize
        type="password"
        name="updatePassword"
        placeholder="Enter Password"
        id="updatepassword-input-password"
        messageId="updatepassword-input-password-message-error"
        key="updatepassword-input-password"
        isValidInput={value => value.length >= 6}
        messageError="The password must be at least 6 characters long"
        onChange={formik.handleChange}
        value={formik.values.updatePassword}
    />

    const repeatPassword = <FormInputAuthorize
        type="password"
        name="repeatUpdatePassword"
        placeholder="Repeat Password"
        id="updatepassword-input-repeat-password"
        messageId="updatepassword-input-repeat-password-message-error"
        key="updatepassword-input-repeat-password"
        isValidInput={(value) => {
            let password = document.getElementById('updatepassword-input-password').value;
            return password == value;
        }}
        messageError="The entered password is not identical"
        onChange={formik.handleChange}
        value={formik.values.repeatUpdatePassword}
    />

    const messageError = <p
        id='updatepassword-status-error'
        key='updatepassword-status-error'
    />

    const submitButton = <FormButtonAuthorize
        type="submit"
        buttonText="Update password"
        key="UpdatePasswordButton"
    />

    // const updatePasswordTimer = <FormTimer
    //     seconds={5}
    //     formText='Resend letter'
    //     callback={updatePassword}
    //     callbackParams={formik.values.updatePassword}
    //     key="updatepassword-form-timer"
    // />

    return (
        <FormAuthorize
            headerText="Update password Form"
            onSubmit={formik.handleSubmit}
            childrens={[password, repeatPassword, messageError, submitButton]}
        />
    )
}

export default UpdateUserPassword;