import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Router/PrivateRoutes';

function Header(props) {
    const navigate = useNavigate();
    const auth = useAuth()
    const handleLoginRoute = () =>{
        navigate("/login")
    }
    const handleLogout= () =>{
        sessionStorage.clear();
        navigate('/');
        toast.success(() => (
            <span>
                <label style={{color: "#43AFFF"}}>Logout</label><br/>
              You have successfully logged out.
            </span>
          ),{
            position: "top-right"
          })
    }
    return (
        <div className='header_main'>
            <div>
                <h4>My<span className='text_color'>Jobs</span></h4>
            </div>
            <div>
                {auth ? <div style={{"display": "flex"}} onClick={handleLogout}>
                    <div className='round_class'> R</div>
                    <img src="./Icon-caret-down.svg" alt="" />
                    </div> :
                <button className='primary_button' onClick={handleLoginRoute}> Login </button>}
            </div>
            {/* <hr className='hr'></hr> */}
        </div>
    );
}

export default Header;