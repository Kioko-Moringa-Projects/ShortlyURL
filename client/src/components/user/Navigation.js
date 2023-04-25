import { useState } from "react";
import { NavLink } from 'react-router-dom';
import './Navigation.css'


export default function Navigation() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="object5 w-full shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <NavLink exact='true' to ="/landing">
                            <h2 className="text-2xl font-bold">ShortlyURL🔗</h2></NavLink>
                        
                      </div>  
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                
                            >
                                </button>
                                
                    
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-600 hover:text-red-600">
                                <NavLink exact='true' to ="/landing">Home</NavLink>
                            </li>
                            <li className="text-gray-600 hover:text-red-600">
                                <NavLink exact='true' to ='/formshort'>Generate Short Urls</NavLink>
                            </li>
                            
                            
                            <li className="text-gray-600 hover:text-red-600">
                                <NavLink to ='/viewUser'>View User</NavLink>
                            </li>

                            <li className="text-gray-600 hover:text-red-600">
                                <NavLink to ='/viewAll'>All Users</NavLink>
                            </li>

                            <li className="text-gray-600 hover:text-red-600">
                                <NavLink to ='/edituser'>Edit User</NavLink>
                            </li>
                            {/* <li className="text-gray-600 hover:text-red-600">
                                <NavLink to ='/signup'>Signup</NavLink>
                            </li>
                            <li className="text-gray-600 hover:text-red-600">
                                <NavLink to ='/login'>Login</NavLink>
                            </li> */}
                        </ul>
                    </div>
                
            </div>
        </nav>
    );
}
