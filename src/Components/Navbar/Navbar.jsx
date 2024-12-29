import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from "axios";
import { server } from '../../main';
import { logoutUser } from '../../Feature/userReducer';
const Navbar = () => {
    const {isAuthenticated}=useSelector((state)=>state.auth);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleLogout=async()=>{
        try{
            const {data}=await axios.post(`${server}/api/v1/user/logout`,{},{
                headers:{
                    token:localStorage.getItem("token")
                }
            });
            dispatch(logoutUser());
            navigate("/");
            console.log(data);
        }
        catch(error){
            console.log(error);
        }
    }
  return (
    

<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between  py-4">
   
        <NavLink className={'text-white mx-4 text-2xl font-bold'} to={"/"}>
            Calorimeter
        </NavLink>
   
    <div class="hidden w-full md:block md:w-auto mx-0" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <NavLink to={"/"} className={'text-white text-xl font-bold'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/my-food"} className={'text-white text-xl font-bold'}>My Food</NavLink>
        </li>
        {/* <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li> */}
        <li>
        <NavLink to={"/terms"} className={'text-white text-xl font-bold'}>Terms</NavLink>
        </li>
        <li>
        <NavLink to={"/contact"} className={'text-white text-xl font-bold'}>Contact</NavLink>
        </li>
        <li>
            {
                isAuthenticated? <button onClick={handleLogout} className={' text-xl text-white font-bold '}>Logout</button>:<NavLink to={"/login"} className={'text-white font-bold text-xl '}>Login</NavLink>
            }
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar