import React from 'react';
import { useState } from "react"

const EditUrl = () => {
    const [value, setValue] = useState("");
    const [inputValue, setInputValue] = useState("");
  
    const handleClick = () => {
      setInputValue(value);
      setValue("");
    }
    return (
        <div>
              <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-purple-600">
                           Edit your URLs
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form>
                        <div>
                            <label
                                
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                               Original URL
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    value={value}
                                    onChange={e => setValue(e.target.value)}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                              ShortlyURL
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="shortlyurl"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                      
                    
                        <div className="flex items-center justify-end mt-4">
                        <button
                                onClick={handleClick}
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Generate
                            </button>
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Delete
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default EditUrl;