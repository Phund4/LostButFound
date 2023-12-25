import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import FormInputAuthorize from '../../components/Form/FormInputAuthorize/FormInputAuthorize';
import FormButtonAuthorize from '../../components/Form/FormButtonAuthorize/FormButtonAuthorize';
import FormAuthorize from '../../components/Form/FormAuthorize/FormAuthorize'
import sendLoginData from '../../api/login';

const validate = values => {
    const errors = {};
    if (!values.loginOrEmail || !values.password || values.password.length < 6) {
        errors.fullname = 'Incorrect form';
    }
    return errors;
};

const Login = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            loginOrEmail: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            const msg = sendLoginData(values.loginOrEmail, values.password);
            if (msg == 'Done') {
                navigate('/myprofile');
                return;
            }
            document.getElementById('login-status-error').textContent = msg;
        },
    });

    const loginOrEmail = <FormInputAuthorize
        type="text"
        name="loginOrEmail"
        placeholder="Enter Login or Email"
        id="login-input-loginoremail"
        messageId="login-input-loginoremail-message-error"
        key="login-input-loginoremail"
        isValidInput={() => true}
        messageError="Incorrect field"
        onChange={formik.handleChange}
        value={formik.values.loginOrEmail}
    />

    const password = <FormInputAuthorize
        type="password"
        name="password"
        placeholder="Enter Password"
        id="login-input-password"
        messageId="login-input-password-message-error"
        key="login-input-password"
        isValidInput={value => value.length >= 6}
        messageError="The password must be at least 6 characters long"
        onChange={formik.handleChange}
        value={formik.values.password}
    />

    const linkToRegistration = <p
        className="link-to-registration"
        onClick={() => navigate("/registration")}
        key="link-to-registration"
    >
        I am not registered
    </p>

    const messageError = <p
        id='login-status-error'
        key='login-status-error'
    />

    const submitButton = <FormButtonAuthorize
        type="submit"
        buttonText="Login Up"
        key="LoginUpButton"
    />

    return (
        <FormAuthorize
            headerText="Login Form"
            onSubmit={formik.handleSubmit}
            childrens={[loginOrEmail, password, linkToRegistration, messageError, submitButton]}
        />
    )
}

export default Login;