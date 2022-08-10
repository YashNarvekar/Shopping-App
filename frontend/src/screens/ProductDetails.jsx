import React from 'react'
import Product from '../products';
import {
    Row,
    Col,
    ListGroup,
    Button,
    Image,
    ListGroupItem,
    Form,
  } from "react-bootstrap";
  import Rating from '../components/Rating';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const ProductDetails = ({match}) => {
    // const product = Product.find((p) => p._id === match.params.id);
  
  const [product,setProduct] = useState([]);
  useEffect(()=> {
    const fetchProduct = async() => {
      const {data} = await axios.get(`/products/${match.params.id}`);
      setProduct(data);
    };
    fetchProduct();
  },[]);
  
    return (
    <>
     <a href="/" className="btn btn-light">
        <i className="fas fa-arrow-left    "></i>
        &nbsp; GO BACK
      </a>
    <h1 style={{margin:"30px"}}>Shopping-List</h1>
     <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} Reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>Price : ${product.price}</ListGroupItem>
            <ListGroupItem>{product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroupItem>
            <Row>
              <Col>Status :</Col>
              <Col>
                {product.countInStock > 0 ? "In Stock " : "out of stock"}
              </Col>
            </Row>
          </ListGroupItem>

          
    
          <ListGroupItem>
            <Button
             className="btn-block"
             type="button"
             style={{marginLeft:"40px"}}
            >
              Add to cart
            </Button>
          </ListGroupItem>
        </Col>
      </Row>

    </>
  )
}

export default ProductDetails





