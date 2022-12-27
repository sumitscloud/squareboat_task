import React from 'react';
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
        navigate('/')
    }
    return (
        <div className='header_main'>
            <div>
                <h4>My<span className='text_color'>Jobs</span></h4>
            </div>
            <div>
                {auth ? <div style={{"display": "flex"}} onClick={handleLogout}>
                    <div className='round_class'> </div>
                    <img src="./Icon-caret-down.svg" alt="" />
                    </div> :
                <button className='primary_button' onClick={handleLoginRoute}> Login </button>}
            </div>
            {/* <hr className='hr'></hr> */}
        </div>
    );
}

export default Header;