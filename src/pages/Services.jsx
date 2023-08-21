import React, { useEffect, useState } from "react";

import "./Service.css"
import Card from "../components/Card";

const Services = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch(" https://ill-rose-barnacle-coat.cyclic.cloud/blog")
      .then((res) => res.json()) // Parse the response as JSON.
      .then((data) => {
        console.log(data,"res"); // Here, 'data' represents the JSON response from the server.
        setData(data); // Set the 'data' state with the fetched blog data.
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
// console.log(data,"pass")
  return <div className="services">
<div  className="services-card" >  {data&&data.map((el,id)=>(
      <Card  data={el} id={id}/>
    )) } 
    </div>
  
  </div>;
};

export default Services;
