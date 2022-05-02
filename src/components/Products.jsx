import React, { useEffect } from "react";
import { Select,Grid, Grid1 } from "./Styled";
import{ ProductCard }from "./ProductCard";
//import PersonalList from "../components/PersonalList/PersonalList";
export const Products = () => {
  let [data,SetData]=React.useState([])
  
  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
    const ProductsData = async()=>{
      try {
        let res= await fetch(`https://movie-fake-server.herokuapp.com/products`)
      let data= await res.json()
      console.log(data)
      SetData(data)

      }
      catch (e) {
   console.log(e)
      }
    }
    ProductsData()
  }, []);
  const handleSort = (e) => {
    // dispatch sort products on change
    if(e.target.value=="asc"){
      data.sort((a,b)=>{
         SetData(a.data.price-b.data.price)
      })
    }
    else if(e.target.value=="desc"){
      data.sort((a,b)=>{
        SetData( b.Data.price-a.Data.price)
      })
    }
  };
  return (
    <>
    
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container" key={data.id}>
        {/* iterate data and show each POroduct card */}
      {
        data.map((data)=>{
          return (
            <>
            <ProductCard item={data}/>
        <Grid1>    <h2>{data.title}</h2>
         <div> <img src={data.image}alt="" /></div>
         <h3>Brand:{data.brand}</h3>
         <h5>Category:{data.category}</h5>
         <p>Price:{data.price}</p></Grid1>
         </>
          )
        })
      }

      </Grid>
    </>
  );
};
