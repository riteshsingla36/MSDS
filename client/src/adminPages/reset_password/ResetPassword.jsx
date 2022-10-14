import axios from 'axios';
import React, { useState } from 'react'
import { TailSpin } from 'react-loader-spinner';
import { useNavigate, useParams } from 'react-router-dom';
import baseUrl from '../../baseUrl';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [processing, setProcessing] = useState(false);
    const {resetpasswordtoken} = useParams();
    const navigate = useNavigate();

    const resetPasswordHandler = (e) => {
        setProcessing(true);
        e.preventDefault();
        if(cPassword !== password) {
            alert("Password and confirmPassword do not match");
            setProcessing(false);
            return;
        }

        axios.post(`${baseUrl}/onboarding/reset-now`, { password: password, resetPasswordToken: resetpasswordtoken }, { withCredentials: true }).then(res => {
            if (!res.data.status) {
                alert(res.data.message);
            }
            else {
                alert("password reset successfully, please login");
                navigate("/admin/login");
            }
            setProcessing(false);
        }).catch(err => {
            alert(err.message);
            setProcessing(false);
        })
    }

    return (
        <div className="test">
            {processing ? <TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass="loader"
            /> : <></>}
            <form onSubmit={resetPasswordHandler}>

                <div className="segment">
                    <h1>Reset Password</h1>
                </div>

                <label>
                    <input type="password" placeholder="Password" id='password' className='password' defaultValue={''} onChange={(e) => setPassword(e.target.value)} required />
                </label>

                <label>
                    <input type="password" placeholder="Confirm Password" id='cpassword' className='cpassword' defaultValue={''} onChange={(e) => setCPassword(e.target.value)} required />
                </label>

                <button className="red" type="submit">Reset Password</button>
            </form>
        </div>
    )
}

export default ResetPassword