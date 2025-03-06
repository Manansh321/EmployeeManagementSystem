import {useContext, useEffect, useState } from 'react'
import './App.css'
import LoginPage from './components/auth/loginPage'
import EmpDashBoard from './components/dashboard/employeeDashboard'
import AdminDashboard from './components/dashboard/adminDashboard'
import AllTask from './components/other/AllTask' 
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

function App() {

  const [user, setUser] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(null); 
  const authData = useContext(AuthContext); 

  useEffect(()=> {  
    const logedInUser = localStorage.getItem("loggedInUser") 
    if (logedInUser) { 
      const userData = JSON.parse(logedInUser);
      // console.log(userData);      
      // console.log(logedInUser, "logged in hai"); 

      setUser(userData.role); 
      setLoggedInUser(userData.data);
    }    
  },[]);
  
  //console.log(authData.admin);
  // console.log(authData.employees);
 
  const handleLogin = (email, password) => { 
    if (email == "admin@example.com" && password == "123") {  
      setUser("admin"); 
      localStorage.setItem("loggedInUser", JSON.stringify({ role: 'admin' }));
      // console.log(user);
    }   
    else if (authData ) {    
      const employees = authData.employees.find((e) => email == e.email && e.password == password ) 
      // console.log("this is user!");       
      if (employees) {   
        setUser("employee")
        setLoggedInUser(employees); 
        localStorage.setItem("loggedInUser", JSON.stringify({ role: 'employee', data:employees })); 
      }     
    } 
    else {
      alert("Invalid credentials");
    }
  }

  // handleLogin("user@me.com", "123");

  const data = useContext(AuthContext);
  // console.log(data);


  return (
    <>

      {!user ? <LoginPage handleLogin={handleLogin} /> : ""} 

      {user == 'admin' ? <AdminDashboard /> : (user == "employee" ? <EmpDashBoard data={loggedInUser} /> : null)}  
 
    </>  
  )
}

export default App
