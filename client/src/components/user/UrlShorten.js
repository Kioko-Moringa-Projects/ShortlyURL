import { useState } from "react"
import React from 'react';

function UrlShorten({ setInputValue }) {
    const [value, setValue] = useState("");

    
  
    const handleClick = () => {
      setInputValue(value);
      setValue("");
    }
    return (
        <div className="inputContainer">
        <h1>Shortly <span>URL</span></h1>
        <div>
          <input
            type="text"
            placeholder="Paste a link to shorten it"
            value={value}
            onChange={e => setValue(e.target.value)}  
          />
          <button onClick={handleClick}>Generate</button>
        </div>
      </div>
    );
}
export default UrlShorten;


  