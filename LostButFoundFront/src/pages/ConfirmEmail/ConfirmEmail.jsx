import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import FormInputAuthorize from '../../components/FormInputAuthorize/FormInputAuthorize';
import FormButtonAuthorize from '../../components/FormButtonAuthorize/FormButtonAuthorize';
import FormAuthorize from '../../components/FormAuthorize/FormAuthorize'
import sendCode from '../../api/sendCode';

const validate = values => {
    const errors = {};
    if (!values.code) {
        errors.fullname = 'Incorrect form';
    }
    return errors;
};


const ConfirmEmail = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            code: ''
        },
        validate,
        onSubmit: values => {
            const msg = sendCode(values.code);
            msg.then(response => {
                if (response == 'Done') {
                    navigate('/login');
                } else {
                    document.getElementById('confirmemail-status-error').textContent = response;
                }
            })
        },
    });

    const confirmCode = <FormInputAuthorize
        type="password"
        name="code"
        placeholder="Enter Code"
        id="confirm-email-input-code"
        messageId="confirm-email-input-code-message-error"
        key="confirm-email-input-code"
        isValidInput={() => true}
        messageError="Invalid Code"
        onChange={formik.handleChange}
        value={formik.values.code}
    />

    const messageError = <p
        id='confirmemail-status-error'
        key='confirmemail-status-error'
    />

    const submitButton = <FormButtonAuthorize
        type="submit"
        buttonText="Send Code"
        key="sendCodeButton"
    />

    // const timer = <MyTimer
    //     duration={5}
    //     key="confirm-email-timer"
    // />

    return (
        <FormAuthorize
            headerText="Register Form"
            onSubmit={formik.handleSubmit}
            childrens={[confirmCode, messageError, submitButton]}
        />
    )
}

export default ConfirmEmail;