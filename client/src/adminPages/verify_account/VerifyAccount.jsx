import axios from 'axios';
import React, { useState } from 'react'
import { TailSpin } from 'react-loader-spinner';
import { useNavigate, useParams } from 'react-router-dom';
import baseUrl from '../../baseUrl';

const VerifyAccount = () => {
  const [processing, setProcessing] = useState(false);
  const { verifytoken } = useParams();
  const navigate = useNavigate();
  const verifyHandler = (e) => {
    e.preventDefault();
    setProcessing(true);
    axios.post(`${baseUrl}/onboarding/verify`, { verificationCode: verifytoken }).then(res => {
      console.log(res, "res");
      if (!res.data.status) {
        alert(res.data.message);
      }
      else {
        alert("You account has been verified.");
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
      <form onSubmit={verifyHandler}>

        <div className="segment">
          <h1>Please Verify Your Account</h1>
        </div>

        <p>Verify your account by clicking button below.....</p>

        <button className="red" type="submit"> Verfiy</button>
      </form>
    </div>
  )
}

export default VerifyAccount