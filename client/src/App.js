import React, { useEffect, useState } from "react";
import Home from "./components/general/Home";
import Navigation from "./components/general/Navigation";

import Signup from "./components/user/Signup"

//import Sidebar from "./components/user/Sidebar";

import Landing from "./components/user/Landing";
import ProfileView from "./components/user/ProfileView";
import UrlShortenList from "./components/user/UrlShortenList";
import FormShort from "./components/user/FormShort";
import Footer from "./components/user/Footer";
import EditUrl from "./components/user/EditUrl";
import Login from "./components/user/Login";


import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ManageUser from "./components/user/ManageUser";
import NavigationUser from "./components/user/Navigation";





function App() {
 
  return (
    <div>
     <BrowserRouter>
               <div>         
            <NavigationUser />
            <Routes>
            <Route  path="/" element={<Landing />} />
            <Route  path="/formshort" element={<FormShort />} />
            <Route  path="/customers" element={<UrlShortenList />} />
            <Route  path="/editurl" element={<EditUrl/>} />
            <Route  path="/signup" element={<Signup />} />
            <Route  path="/login" element={<Login/>} />
            <Route  path="/customers/:id/edit" element={<ManageUser/>} />
            <Route  path="/customers/:id" element={<ProfileView/>} />
             </Routes>
          <Footer />      
          </div>          
      </BrowserRouter> 


     {/* <BrowserRouter>
      <div>
      <Navigation />
        <Routes>
        <Route exact path="/" element={<Home />} />
        
        </Routes>
      
      </div>
      </BrowserRouter>  */}
                    

       


    </div>
    
  );
}

export default App;
