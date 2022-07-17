import React, { Component }  from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { singUp, singIn,auth } from './config/firebase';


const App = () => { 
 
  useEffect(() => {
    singIn('jadsads@gnail.com', '123456').then(() => {console.log("signed in")}).catch((error) => {console.log("hata :"+error)});
    // singUp('Johnssy', 'jadsads@gnail.com', '123456')});
  }, []);
  
  
  return <div>
<h1>Hello Worlds</h1> 
</div>; }
 



export default App;
