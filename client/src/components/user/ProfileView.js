import React from 'react';
import { useParams } from "react-router-dom"
import {useEffect, useState} from 'react'

function ProfileView() {
  const {id} = useParams()
  const[customer, setCustomer] = useState({})

  useEffect(()=> {
    fetch (`customers/${id}`)

    .then(response => response.json())
    .then( data => setCustomer(data))

},[])
    return (
        <div>
            <div scope="row" class="bg-white my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
                <div class="relative h-40">
                    <img class="absolute h-full w-full object-cover" src="https://images.unsplash.com/photo-1448932133140-b4045783ed9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"></img>
                </div>
      <div class="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
        <img class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"></img>
      </div>
      <div class="mt-16">
        <h1 class="text-lg text-center font-semibold">
          Cassie 
        </h1>
        <p class="text-sm text-gray-600 text-center">
          13 connections in common
        </p>
      </div>
      <div class="mt-6 pt-3 flex flex-wrap mx-6 border-t">
        <div class="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          User experience
        </div>
        <div class="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          VueJS
        </div>
        <div class="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          TailwindCSS
        </div>
        <div class="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          React
        </div>
        <div class="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          Painting
        </div>
      </div>
    </div>
        </div>
    );
}

export default ProfileView;