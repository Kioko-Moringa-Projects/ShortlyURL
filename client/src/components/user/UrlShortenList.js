import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import { Link }from 'react-router-dom';

function UrlShortenList() {
    const[customers, setCustomers]= useState([])

    useEffect(()=>{
        fetch(" /customers")
        .then(response => response.json())
        .then(data => setCustomers(data))
    },[])
    function deleteCustomer(id) {
        fetch(`/customers/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(r => r.json())
        .then(()=> { const deleting = customers.filter((customer) => customer.id !== id) 
          setCustomers(deleting)
      
      
      
        })
      
        .catch(err=> console.log(err))
        alert("delete was successful")
      
      }
    
    return (
        <>
            <div className="grid gap-2 lg:grid-cols-4">
                {customers.map((row) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm" >
                        <img
                            className="object-cover w-full h-48"
                            src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-avatar-icon-png-image_695765.jpg"
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-600">
                                
                                {row.username}
                            </h4>
                            <p className="mb-2 leading-normal">
                            {row.first_name}
                            </p>
                            <p className="mb-2 leading-normal">
                            {row.last_name}
                            </p>
                            <p className="mb-2 leading-normal">
                            {row.email}
                            </p>
                            <button  onClick={() => {deleteCustomer (row.id)}} className="px-4 py-2 text-sm text-blue-10 bg-red-500 shadow">
                                DELETE
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default UrlShortenList;