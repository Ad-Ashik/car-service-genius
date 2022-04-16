import React from 'react';
import googleLogo from '../../../images/socail/google-logo.png';
import fbLogo from '../../../images/socail/fb-logo.png';
import gitLogo from '../../../images/socail/git-logo.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocailLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, userhub, loadinghub, errorhub] = useSignInWithGithub(auth);


    const navigate = useNavigate();
    let errorCehck;

    if (error || errorhub) {
        errorCehck = <p className='text-danger'>Error: {error?.message} {errorhub?.message}</p>
    }

    if (user || userhub) {
        navigate('/')
    }
    return (
        <div className='mx-auto w-50 '>
            <div className="d-flex align-items-center">
                <div style={{ height: '1px' }} className='w-50 bg-secondary'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-secondary'></div>
            </div>
            {errorCehck}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline-primary w-100 p-2'>
                    <img style={{ width: '35px' }} src={googleLogo} alt="" />
                    <span className='px-1'>Google Sing In</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-outline-primary w-100 p-2 my-3'>
                    <img style={{ width: '35px' }} src={gitLogo} alt="" />
                    <span className='px-1'>GitHub Sing In</span>
                </button>
                <button className='btn btn-outline-primary w-100 p-2'>
                    <img style={{ width: '35px' }} src={fbLogo} alt="" />
                    <span className='px-1'>Facebook Sing In</span>
                </button>
            </div>
        </div>
    );
};

export default SocailLogin;