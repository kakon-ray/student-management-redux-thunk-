/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import './Home.css'
import { useDispatch, useSelector } from "react-redux";
import { postCartList } from "../../../redux/action/CartListAction";
import getProductData from "../../../redux/thunk/action/getProductData";

const Home = () => {
const dispatch = useDispatch();

  const allProduct = useSelector(
    (state) => state.product.product
  );

  useEffect(() => {
    dispatch(getProductData())
  }, [dispatch]);


  const addToCartList = (product) => {

     dispatch(postCartList(product))
  }

    return (
       <div className='container my-5 '>
          <div className='row'>
            {
              allProduct.map((product)=>{
                  return(
                  <div className='col-lg-3' key={product.id}>
                    <div className='card'>
                       <div className='card-body'>
                          <img src={product.image} className="img-fluid"/>
                          <div className='card-body-header'>
                            <h5>{product.productName}</h5>
                            <h5>{product.price}$</h5>
                          </div>
                          <p>{product.productDetails}</p>
                          <button type="button" class="btn btn-success w-100" onClick={()=>addToCartList(product)}><i class="fas fa-cart-plus m-2"></i>Add To Cart</button>
                       </div>
                    </div>
                 </div>
                  )
              })
            }
         
       
          </div>
       </div>
    );
};

export default Home;