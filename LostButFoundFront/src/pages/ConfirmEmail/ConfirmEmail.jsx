import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import FormInputAuthorize from '../../components/Form/FormInputAuthorize/FormInputAuthorize';
import FormButtonAuthorize from '../../components/Form/FormButtonAuthorize/FormButtonAuthorize';
import FormAuthorize from '../../components/Form/FormAuthorize/FormAuthorize'
import {sendCode, resendCode} from '../../api/confirmEmail';
import FormTimer from '../../components/Form/FormTimer/FormTimer'

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
            msg.then(resp => {
                if (resp == 'Done') {
                    navigate('/login');
                } else {
                    document.getElementById('confirmemail-status-error').textContent = resp;
                }
                return;
            }).catch(resp => {
                document.getElementById('confirmemail-status-error').textContent = resp;
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

    const timer = <FormTimer
        seconds={5}
        callback={resendCode}
        callbackParams={[]}
        key="confirm-email-timer"
    />

    return (
        <FormAuthorize
            headerText="Confirm email Form"
            onSubmit={formik.handleSubmit}
            childrens={[confirmCode, messageError, submitButton, timer]}
        />
    )
}

export default ConfirmEmail;