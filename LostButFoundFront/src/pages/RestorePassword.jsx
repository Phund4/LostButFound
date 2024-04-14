import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import FormInputAuthorize from '../components/Form/FormInputAuthorize/FormInputAuthorize';
import FormButtonAuthorize from '../components/Form/FormButtonAuthorize/FormButtonAuthorize';
import FormAuthorize from '../components/Form/FormAuthorize/FormAuthorize'
import sendCode from '../api/restorePassword';

const validate = values => {
    const errors = {};
    const re = /^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i;

    if (!values.emailToRestore || !re.test(values.emailToRestore)) {
        errors.fullname = 'Incorrect form';
    }

    return errors;
};

const RestorePassword = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            emailToRestore: '',
        },
        validate,
        onSubmit: values => {
            const msg = sendCode(values.emailToRestore);
            msg.then(resp => {
                if (resp == 'Done') {
                    navigate('/login');
                    return;
                }
                document.getElementById('restorepassword-status-error').textContent = resp;
            }).catch(resp => {
                document.getElementById('restorepassword-status-error').textContent = resp;
            })
        },
    });

    const emailToRestore = <FormInputAuthorize
        type="email"
        name="emailToRestore"
        placeholder="Enter Email"
        id="restorepassword-input-email"
        messageId="restorepassword-input-email-message-error"
        key="restorepassword-input-email"
        isValidInput={(value) => {
            let re = /^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i;
            return re.test(value);
        }}
        messageError="Incorrect email"
        onChange={formik.handleChange}
        value={formik.values.emailToRestore}
    />

    const messageError = <p
        id='restorepassword-status-error'
        key='restorepassword-status-error'
    />

    const submitButton = <FormButtonAuthorize
        type="submit"
        buttonText="Send code to restore password"
        key="RestorePasswordButton"
    />

    return (
        <FormAuthorize
            headerText="Restore password Form"
            onSubmit={formik.handleSubmit}
            childrens={[emailToRestore, messageError, submitButton]}
        />
        
    )
}

export default RestorePassword;