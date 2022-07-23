import React, { useEffect, useState } from 'react';
import Image from './Image';
import axios from "axios";

const App = () => {
  const API_URL = "https://api.dribbble.com/v2/user/shots?access_token=64e47154dcb3c0dff340bc2a9defd0206b9706440682a5c9cdf27164ef18b514";
  const [shots, setShots] = useState([]);
  
  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setShots(response.data);
      console.log(response);
    });
  }, []);
  

  return (
    <div className="App container mx-auto">
      <div className="flex justify-center mt-5 my-5">
        <h1 className="text-4xl text-violet-600 font-bold">Abdurrahimkhan</h1>
      </div>
      <div className="grid grid-cols-1 ml-10 mr-10 lg:grid-cols-3 lg:gap-4 justify-items-center">
        {shots.map((shotreq) => (
          <Image key={shotreq.id} {...shotreq} />
        ))}
      </div>
    </div>
  );
}


export default App
