import React, { useState } from 'react'
import './index.css'

const LoginForm = () => {

    const [username, setUsername] = useState('')

    const renderUserNameField = () => {
        return(
            <>
            <label className='input-label' htmlFor='username'>USERNAME</label>
            <input className='input' id='username' type='text' value={username} placeholder='Username'/>
            </>
        )
    }

  return (
    <div className='bgcolor'>
        <div className='login-image'>
            <img src='https://res.cloudinary.com/surya-teja/image/upload/v1702281607/Book%20Store/Rectangle_1467_wzhge6_ykftzx_iqwdw5.png' alt='' className='image' />
        </div>
        <div className='login-form-container'>
            <img src='https://res.cloudinary.com/surya-teja/image/upload/v1702014219/Book%20Store/crossword_logo_small_bc561912-757f-49bc-b641-bab1dfb66c4e_small_ysubkj.svg' alt='logo.png' className='logo' />
            <form>
                {renderUserNameField()}
            </form>
        </div>
    </div>
  )
}

export default LoginForm