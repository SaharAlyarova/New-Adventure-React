
import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import {uid} from "uid"
import { ProductsContext } from '../../context/context';

const ProductsList = () => {
  const { productsData, setProductsData, basket, setBasket } =
  useContext(ProductsContext);
const [customers, setCustomers] = useState()


  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/products")
      .then((data) => setCustomers(data.data));
  }, []);




  const handleAddCard = (product) => {
    if (!basket.includes(product)) {
      setBasket([...basket, product]);
    } else {
      alert("you already added this product");
    }
  };
  return (
    <div>
        {/* <i class="icon-chevrons-up"></i> */}
 
      
     <table>
          <thead>
            <th>Product ID</th>
            <th>Product NAME</th>
            <th>Unit Price</th>
            <th>Quuantitity Per Unit</th>
            <th>Phone</th>
            <th>Add to Card</th>
        
          </thead>
          <tbody>
            {customers?.map((customer) => {
              return (
                <tr key={uid()}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.unitPrice}</td>
                  <td>
                    {customer.quantityPerUnit}
                  </td>
                  <td>
                    <Link to={`/productslist/${customer.id}`}  style={{color:"black"}}>Details</Link>
                  </td>
                 <td>
                 <button
                          className="addBtn"
                          // className={
                          //   basket.find((el) => el.id === product.id)
                          //     ? "added"
                          //     : "addBtn"
                          // }
                          disabled={
                            basket.find((el) => el.id === customer.id)
                              ? true
                              : false
                          }
                          onClick={() => handleAddCard(customer)}
                        >
                          {basket.find((el) => el.id === customer.id)
                            ? "Added"
                            : "Add to Card"}
                        </button>
                 </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      
    </div>
  )
}

export default ProductsList
