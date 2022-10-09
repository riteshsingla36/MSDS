import React, { useEffect, useState } from 'react';
import baseUrl from '../../baseUrl';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    useEffect(() => {
        const auth = document.cookie?.split('; ')?.find((row) => row.startsWith('email'))?.split('=')[1];
        if(auth){
            navigate('/admin');
        }
    }, []);

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const loginHandler = (e) => {
        e.preventDefault();
        axios.post(`${baseUrl}/onboarding/login`, {email: email, password: password}, {withCredentials: true}).then(res => {
          if(!res.data.status) {
            alert(res.data.message);
          }
          else {
            alert("successfully logged in");
            navigate("/admin");
          }
        })
    }

    return (
        <div className="test">
            <form onSubmit={loginHandler}>

                <div className="segment">
                    <h1>LOGIN</h1>
                </div>

                <label>
                    <input type="email" placeholder="Email" id='email' className='email' defaultValue={''}onChange={(e) => setEmail(e.target.value)}  required />
                </label>

                <label>
                    <input type="password" placeholder="Password" id='password' className='password' defaultValue={''} onChange={(e) => setPassword(e.target.value)} required />
                </label>

                <button className="red" type="submit"> LOGIN</button>
                <div className='not-reg'>
                    <span >Not Registerd Yet! &nbsp;&nbsp;&nbsp;</span> <Link to='/admin/register'>Register Here</Link>
                </div>
            </form>
        </div>
    )
}

export default Login