
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { ProductsContext } from "../../context/context";
const ProductsListDetail = () => {
const [dataById, setDataById] = useState([])
const { productsData, setProductsData, basket, setBasket } =
useContext(ProductsContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://northwind.vercel.app/api/products/${id}`)
      .then((response) => {
        setDataById(response.data);
      
      });
  }, []);
  const handleAddToCard = (dataById) => {
    setBasket([...basket, dataById]);
  };
  return (
    <div>
     <h1 style={{color:"green"}}>Chef Anton's Gumbo Mix</h1>

     <div style={{display:"flex",justifyContent:"center",alignItems:"center",columnGap:"10px"}}>
<h4>ID</h4>
<p>{dataById.id}</p>
</div>
<div style={{display:"flex",justifyContent:"center",alignItems:"center",columnGap:"10px"}}>
<h4>Unit Price</h4>
<p>{dataById.unitPrice}</p>
</div>
<div style={{display:"flex",justifyContent:"center",alignItems:"center",columnGap:"10px"}}>
<h4>Quantity Per Unit </h4>
<p>{dataById.quantityPerUnit}</p>
</div>
<div style={{display:"flex",justifyContent:"center",alignItems:"center",columnGap:"10px"}}>
<h4> Units In Stock  </h4>
<p>{dataById.unitsInStock}</p>
</div>
<div style={{display:"flex",justifyContent:"center",alignItems:"center",columnGap:"10px"}}>
<h4> Units In Stock  </h4>
<p>{dataById.unitsInStock}</p>
</div>



      <button onClick={() => navigate("/productslist")}>Click to Back</button>
      <button
                disabled={
                  basket.find((el) => el.id === dataById.id) ? true : false
                }
                className="add"
                onClick={() => handleAddToCard(dataById)}
              >
                Add to Card
              </button>
    </div>
  )
}

export default ProductsListDetail
