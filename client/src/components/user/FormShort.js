import React from 'react';
import UrlShorten from './UrlShorten';
import ShortenUrl from './ShortenUrl';
import { useState } from 'react';
import BackgroundUrl from './BackgroundUrl';
import './FormShort.css'

function FormShort() {
    
const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <UrlShorten setInputValue={setInputValue} />
      <BackgroundUrl />
      <ShortenUrl inputValue={inputValue} />
    </div>
  );
}

export default FormShort;