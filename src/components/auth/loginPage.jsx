import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const LoginPage = ({handleLogin}) => { 
  // console.log(handleLogin);    
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(` form submitted and email is: ${email} and password is: ${password} `);

    handleLogin(email, password);   

    setEmail('');
    setPassword('');
  }


  const data = useContext(AuthContext);
  // console.log(data);  


  return (
    <div className='flex items-center justify-center h-screen w-screen ' >

      <div className='border-2 rounded-xl  border-emerald-600 p-20'>
        <form onSubmit={(e) => { submitHandler(e) }} action="" className='flex flex-col items-center justify-center' >

          <input 
          value={email} 
          onChange={(e)=> {
            setEmail(e.target.value)
          }}
          required
           className='  outline-none bg-transperent rounded-full  border-2 border-emerald-600 py-4 px-5 placeholder: text-gray-400' type="email" placeholder='enter your email ' />

          <input 
          value={password}
          onChange={(e)=> {
            setPassword(e.target.value) 
          }}
          required
           className='  outline-none bg-transperent rounded-full  border-2 border-emerald-600 mt-3 py-4 px-5 placeholder: text-gray-400' type="password" placeholder='enter your password ' />

          <button className=' mt-5 text-white outline-none  rounded-full  border-2 bg-emerald-600 py-4 px-5 placeholder: ' >Login</button>

        </form>
      </div>

    </div>
  )
}

export default LoginPage