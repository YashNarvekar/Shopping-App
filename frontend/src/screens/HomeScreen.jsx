import React, { useEffect, useState } from 'react'
import products from '../products';
import axios from 'axios';
import {Row,Col} from 'react-bootstrap';
import ProductScreen from './ProductScreen';


const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      const fetchProducts = async() => {
        const {data} = await axios.get("/products");
        setProducts(data);
        
      };

    fetchProducts();
     
    }, []);
    


  return (
    <>
    
    <Row>
    {products.map((product) => (
            <Col key={product._id} md={3}>
              <ProductScreen product={product} />
            </Col>
          ))}
        
    </Row>



    </>
  )
}

export default HomeScreen







// import React, { useState,useEffect } from 'react'
// import products from '../products';
// import axios from 'axios';
// import {Row,Col} from 'react-bootstrap';
// import ProductScreen from './ProductScreen';



// const HomeScreen = () => {
//   // const [Products, setProducts] = useState([]);

//   // useEffect(() => {
//   //   const fetchProducts = async () => {
//   //     const {data} = await axios.get('/products');
//   //     setProducts(data)
//   //   }
//   //   fetchProducts()

//   // },[]);


//   return (
//     <>
//     {/* <h1>Hwlloo</h1> */}
//     <Row>
//         {
//             Products.map((product) => (
//                 <Col key={product._id} md={3}>
//                 <ProductScreen product={product} />
//                 </Col>
//             ))
//         }
//     </Row>



//     </>
//   )
// }

// export default HomeScreen