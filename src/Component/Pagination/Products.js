import React, { useEffect } from "react";
import { useState } from "react";
import Pagination from "./Pagination";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(3);

  useEffect(() => {
    fetch("https://shrouded-harbor-84354.herokuapp.com/products" )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  // get products
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) =>{
      setCurrentPage(pageNumber)
  }
  return (
    <div>
        <h1> Product Pagination  </h1>
      <Product products={currentProducts}></Product>
      
      
      <Pagination productPerPage={productPerPage} totalProduct={products.length} paginate={ paginate } ></Pagination>
    </div>
  );
};

export default Products;
