import React, {useState, useEffect} from 'react';
import Figure from 'react-bootstrap/Figure';
import './Login.css'
import { useParams } from "react-router-dom";

function ManageUser() {
    const {id} = useParams();
    
    const[data,setData]= useState({
        first_name:'',
        last_name:'',
        email:'',
        username:'',
        password_digest: ''
    })
    function handleChange(e){

  
        setData({...setData, [e.target.id]: e.target.value});
    }

    useEffect(() => {

        fetch(`/customers/${id}`)
          .then((response) => response.json())
          .then((data) => {
           
              setData(data)
             console.log(data)
          
    
          })
          .catch((error) => console.log(error));

      }, [])
            function handleSubmit(e) {
                e.preventDefault();
                fetch(`/customers/${id}`,{
            method:'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(data => {
        console.log(data)
        setData(data)
        })
    }
    return (
        <div>
            <div>
            <div class="figure1">
            <Figure>
                <Figure.Image
                    width={271}
                    height={280}
                     
                    alt="471x480"
                    src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Profile_re_4a55.svg"
                />
                
            </Figure>
            </div>
            </div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-purple-600">
                            Update Details 
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={(e)=>handleSubmit(e)}>
                        <div>
                            <label
                                
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                               First Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    value={data.first_name} onChange={e=>handleChange(e)}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                               Last Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    value={data.last_name} onChange={e=>handleChange(e)}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    value={data.email} onChange={e=>handleChange(e)}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Username
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    value={data.username} onChange={e=>handleChange(e)}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    value={data.password_digest} onChange={e=>handleChange(e)}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        
                        <div className="flex items-center mt-4">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                Update
                            </button>
                        </div>
                        <div className="flex items-center mt-4">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
                                Delete
                            </button>
                        </div>
                    </form>
                    
                    </div>
            </div>
        </div>
    );
}

export default ManageUser;