import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocailLogin from '../SocailLogin/SocailLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwrodRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    let errorCehck;
    if (error) {
        errorCehck = <p className='text-danger'>Error: {error?.message}</p>

    }

    const formSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        console.log(emailRef.current.value);
        const password = passwrodRef.current.value;


        signInWithEmailAndPassword(email, password);


    }

    const clickRegister = e => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('please check your email');
        }
        else {
            toast('please entar your email')
        }
    }

    return (
        <div className='w-50 mx-auto border border-3 p-4 my-5 rounded-3'>
            {
                loading &&
                <div class="text-center">
                    <div class="spinner-border text-primary" role="status">
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            <h2 className='text-center text-primary'>Please Login</h2>
            <Form onSubmit={formSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwrodRef} type="password" placeholder="Password" required />
                </Form.Group>
                {errorCehck}
                {/* {
                    sending ? <p>sending</p> : <p>{errorCehck}</p>
                } */}
                <p>Forget your password? <Link to="" className='text-primary text-decoration-underline' onClick={resetPassword}>
                    Reset Password
                </Link>
                </p>
                <Button variant="primary" type="submit" className='w-25'>
                    Login
                </Button>
                {/* <p className='text-center'>New to Genius? <span>
                    <Link to="/register">Please Register</Link>
                </span> */}
                <p className='text-center'>New to Genius? <Link to="/register" className='text-primary text-decoration-underline' onClick={clickRegister}>
                    Please Register
                </Link>
                </p>
                <SocailLogin></SocailLogin>
                <ToastContainer />
            </Form>
        </div >
    );
};

export default Login;