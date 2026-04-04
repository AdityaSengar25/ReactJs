import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'; // helps reducing loading lag

function Github() {
  const data = useLoaderData()
  // const [data,setData] = useState([]);
  //   useEffect(() => {
  //       fetch('https://api.github.com/users/adityasengar25')
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log(data);
  //         setData(data)
  //       })
  //     },[])
  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-2xl'>Github Followers:{data.followers}</div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
  const response = await fetch('https://api.github.com/users/adityasengar25')
  return response.json()
}