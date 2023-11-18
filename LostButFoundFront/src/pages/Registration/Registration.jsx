import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import FormInputAuthorize from '../../components/FormInputAuthorize/FormInputAuthorize';
import FormButtonAuthorize from '../../components/FormButtonAuthorize/FormButtonAuthorize';
import FormAuthorize from '../../components/FormAuthorize/FormAuthorize'
import sendRegistrationData from '../../api/register';

const validate = values => {
    const errors = {};
    const re = /^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i;

    if (!values.fullname || values.fullname.length < 6 ||
        !values.login || values.login.length < 6 ||
        !values.email || !re.test(values.email) ||
        !values.password || values.password.length < 6 ||
        values.repeatPassword !== values.password) {
        errors.fullname = 'Incorrect form';
    }

    return errors;
};

const Registration = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            fullname: '',
            login: '',
            email: '',
            password: '',
            repeatPassword: ''
        },
        validate,
        onSubmit: values => {
            const msg = sendRegistrationData(values.fullname, values.login, values.email, values.password);
            msg.then(response => {
                if (response == 'Done') {
                    navigate('/confirmemail');
                } else {
                    document.getElementById('registration-status-error').textContent = response;
                }
            })
        },
    });

    const fullname = <FormInputAuthorize
        type="text"
        name="fullname"
        placeholder="Enter FullName"
        id="registration-input-fullname"
        messageId="registration-input-fullname-message-error"
        key="registration-input-fullname"
        isValidInput={value => value.length >= 6}
        messageError="The fullname must be at least 6 characters long"
        onChange={formik.handleChange}
        value={formik.values.fullname}
    />

    const login = <FormInputAuthorize
        type="text"
        name="login"
        placeholder="Enter Login"
        id="registration-input-login"
        messageId="registration-input-login-message-error"
        key="registration-input-login"
        isValidInput={value => value.length >= 6}
        messageError="The login must be at least 6 characters long"
        onChange={formik.handleChange}
        value={formik.values.login}
    />

    const email = <FormInputAuthorize
        type="email"
        name="email"
        placeholder="Enter Email"
        id="registration-input-email"
        messageId="registration-input-email-message-error"
        key="registration-input-email"
        isValidInput={(value) => {
            let re = /^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i;
            return re.test(value);
        }}
        messageError="Uncorrect email"
        onChange={formik.handleChange}
        value={formik.values.email}
    />

    const password = <FormInputAuthorize
        type="password"
        name="password"
        placeholder="Enter Password"
        id="registration-input-password"
        messageId="registration-input-password-message-error"
        key="registration-input-password"
        isValidInput={value => value.length >= 6}
        messageError="The password must be at least 6 characters long"
        onChange={formik.handleChange}
        value={formik.values.password}
    />

    const repeatPassword = <FormInputAuthorize
        type="password"
        name="repeatPassword"
        placeholder="Repeat Password"
        id="registration-input-repeat-password"
        messageId="registration-input-repeat-password-message-error"
        key="registration-input-repeat-password"
        isValidInput={(value) => {
            let password = document.getElementById('registration-input-password').value;
            return password == value;
        }}
        messageError="The entered password is not identical"
        onChange={formik.handleChange}
        value={formik.values.repeatPassword}
    />

    const linkToLogin = <p
        className="link-to-login"
        onClick={() => navigate("/login")}
        key="link-to-login"
    >
        I am already registered
    </p>

    const messageError = <p
        id='registration-status-error'
        key='registration-status-error'
    />

    const submitButton = <FormButtonAuthorize
        type="submit"
        buttonText="Sign Up"
        key="signUpButton"
    />

    return (
        <FormAuthorize
            headerText="Register Form"
            onSubmit={formik.handleSubmit}
            childrens={[fullname, login, email, password, repeatPassword, linkToLogin, messageError, submitButton]}
        />
        
    )
}

export default Registration;