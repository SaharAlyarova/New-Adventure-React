import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
const HomeCom = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
  axios
    .get("http://localhost:8000/blogs")
    .then((data) => setCustomers(data.data));
}, []);
  return (
    <div>
      
      <Helmet>
        <title>Home Page</title>
        <meta charSet="utf-8" />
        <meta description="this is customers list page" />
      </Helmet>
      <div className='blogpage'>
      {customers.map((customer) => {
return(
  <Link to={`/homecom ${customer.id}`} key={customer.id}>
      <div style={{maxWidth:"100%"}}>
<h2>{customer.title}</h2>
<h3>{customer.body}</h3>
<p>{customer.author}</p>
</div>
  </Link>

)




        })}
      </div>
    </div>
  )
}

export default HomeCom
