import React from 'react'
import "./AdminLogin.css"



const AdminLogin = () => {
  return (
    <div className="login-container">
        <div className="login-container-inside">
           <div className='div-inner-email'>
            <div className='login-input'>
                <label htmlFor="Email" className='login-label'>Email:</label>
                <input className='input-emailpass' type="text" placeholder='Enter your email' />
                <label htmlFor="Email" className='login-label'>Password:</label>
                <input className='input-emailpass' type="text" placeholder='Enter password'/>
            </div>
            <div className='login-btn-div'>
                {/* <Button buttonStyle='btn--outline'>LOGIN</Button> */}
                <button className='login-btn btn--medium  '>LOGIN</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default AdminLogin