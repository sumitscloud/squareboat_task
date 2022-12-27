import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { isValidEmail } from '../helper';
import { userLoginService } from '../services/service';
import Header from './Header';

const Login = (props) => {
    const [data, setData]= useState({
      email : '',
      password: '',
    });
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError]= useState(false);
    const navigate = useNavigate();
    const handleBlur = () =>{
      if(isValidEmail(data.email)){
        setEmailError(false)
      }
      else{
        setEmailError(true)
      }
    }
    const handleChange = (event) =>{
      setData({...data, [event.target.name]:event.target.value})
    }
    
    const handleLogin = (e) =>{
      e.preventDefault();
      setPasswordError(false)
      if(isValidEmail(data.email)){
        userLoginService(data).then(res=>{
          sessionStorage.setItem("token",res.data.data.token)
          toast.success("Login successfully!!", { position: 'top-right',});
          navigate('/dashboard')
          console.log(res.data.data.token);
        }).catch(err=>{
          console.log("error", err);
          setPasswordError(true);
        })
      }
      else{
        setEmailError(true)
      }
    }
      return (
        <>
        <Header/>
        <div className='upper_div'>
            <div>
          <div className="custom-modal">
            <div className='modal-title'>Login</div>
            <div className='modal-main'>
              <form action='submit' onSubmit={(e) =>handleLogin(e)}>
                <label>Email</label>
                <br/>
                <input className={emailError ? 'input_field input_error' : 'input_field'} type="text" name='email' placeholder='Enter your email' onChange={handleChange} onBlur={handleBlur}/>
                <div className='error_div'>{emailError ? "Please enter a valid email address" : "" }</div>
                <label>Password</label>
                <br/>
                <input className={passwordError ? 'input_field input_error' : 'input_field'} type="password" name='password' placeholder='Enter your password'onChange={handleChange}/>
                <div className='error_div'> {passwordError ? "Incorrect email address or password." : "" } </div>
                <div className='button_div'>
                    <button className='button_secondary' type='submit'>Login</button>
                </div>
                </form>
            </div>
          </div>
          {/* <div className="bg" onClick={e => close(e)}/> */}
        </div>
        </div>
        <div className='lower_div'>

        </div>
        </>
        
    );
};

export default Login;