import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocailLogin from '../SocailLogin/SocailLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile] = useUpdateProfile(auth);


    if (user) {
        console.log(user);
    }

    const registerForm = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // const agree = e.target.terms.checked;

        console.log(e.target.name.value);


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');

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
            <h2 className='text-center text-primary'>Please Register</h2>
            <Form onSubmit={registerForm}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3 d-flex" controlId="formBasicCheck">
                    <Form.Check onClick={() => setAgree(!agree)} className='mx-2' name="terms" />
                    <Form.Label className={agree ? 'text-primary' : 'text-danger'}>Accept Genius Car <Link to="">Terms & Conditions</Link></Form.Label>
                </Form.Group>
                <Button variant="primary" type="submit" className='w-25' disabled={!agree}>
                    Register
                </Button>
                <p className='text-center'>Already have an account? <Link to="/login" className='text-primary text-decoration-underline'>
                    Please Login
                </Link>
                </p>
                <SocailLogin></SocailLogin>
            </Form>
        </div>
    );
};

export default Register;