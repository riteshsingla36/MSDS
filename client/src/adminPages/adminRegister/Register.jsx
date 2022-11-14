import baseUrl from '../../baseUrl'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner'

const Register = () => {

    // useEffect(() => {
    //     const auth = document.cookie?.split('; ')?.find((row) => row.startsWith('email'))?.split('=')[1];
    //     if(auth){
    //         navigate('/admin');
    //     }
    // }, []);

    const navigate = useNavigate();
    const [processing, setProcessing] = useState(false);

    const registerAdmin = (e) => {
        setProcessing(true);
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const userName = e.target.username.value;
        const phoneNo = e.target.phoneNo.value;
        const confirmPassword = e.target.cpassword.value;
        const password = e.target.password.value;

        if (email === "") {
            alert("please provide email");
            setProcessing(false);
            return;
        }

        if(password !== confirmPassword){
            alert("Confirm password is incorrect");
            setProcessing(false);
            return;
        }  
        axios.post(`${baseUrl}/onboarding/register`, { name: name, email: email, userName: userName, phoneNo: phoneNo, password: password, confirmPassword: confirmPassword})
            .then(res => {
                if (res.data.status) {
                    alert("Register successfully");
                    e.target.name.value = "";
                    e.target.email.value = "";
                    e.target.username.value = "";
                    e.target.phoneNo.value = "";
                    e.target.password.value = "";
                    navigate('/admin');
                }
                else {
                    alert(res.data.message);
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
            />: <></>}
            <form method="post" encType="multipart/form-data" onSubmit={registerAdmin}>

                <div className="segment">
                    <h1>Register</h1>
                </div>

                <label>
                    <input type="text" placeholder="Name" id='name' name='name' required />
                </label>

                <label>
                    <input type="text" placeholder="UserName" id='username' name='username' required />
                </label>

                <label>
                    <input type="text" placeholder="Email" id='email' name='email' required />
                </label>

                <label>
                    <input type="number" placeholder="Phone No." id='phoneNo' name='phoneNo' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" maxLength='10' required />
                </label>

                <label>
                    <input type="password" placeholder="Password" id='password' name='password' minLength='8' required />
                </label>

                <label>
                    <input type="password" placeholder="Confirm Password" id='cpassword' name='cpassword' minLength='8' required />
                </label>

                <button className="red" type="submit"><i className="icon ion-md-lock"></i> Register</button>
                <div className='not-reg'>
                    <span >Already Registerd &nbsp;&nbsp;&nbsp;</span> <Link to='/admin/login'>LOGIN</Link>
                </div>
            </form>
        </div>
    )
}

export default Register
