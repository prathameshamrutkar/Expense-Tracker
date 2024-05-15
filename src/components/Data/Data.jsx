import React from 'react'
import { useState, useEffect } from 'react';

const Data = () => {
    const [posts, setPosts] = useState([]);
    let email=localStorage.getItem('login');
    email=email.replace('.com','');
    let link ="https://expense-tracker-5cb0b-default-rtdb.firebaseio.com/"+email+".json";
    console.log(link);

    useEffect(() => {
      
       fetch(link)
          .then((res) => res.json())
          .then((data) => {
             console.log(data);
             localStorage.setItem('vikas',JSON.stringify(data));
    
             setPosts(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);
 


  return (
    <div></div>
  )
}


export default Data