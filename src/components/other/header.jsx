import React, { useState } from 'react' 
import { useEffect } from 'react';

const Header = () => {

  // console.log(data);
  // const [userName, setUserName] = useState('');

  // if (!data) {
  //   setUserName("admin");
  // }
  // else {
  //   setUserName(data.data.firstName)
  // }

  // useEffect(()=> {
  //   console.log("");
  // })

  const logOutUser = ()=> {
    localStorage.setItem('loggedInUser', ''); 
    window.location.reload();
  }  

  return (
    <div className='flex items-start justify-between' >
      <h1 className='text-2xl font-medium ' >
        <br />    
        <span className='text-3xl font-semibold ' > Hello userName aa jayga badme 👋  </span>
      </h1>

      <button onClick={logOutUser} className='bg-red-500 text-white px-5 py-2 rounded-s-sm text-lg font-medium ' > Log out </button>

    </div>
  )
}

export default Header