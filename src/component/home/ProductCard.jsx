import { Button, Card } from "flowbite-react";
import React from "react";
import { HiPlus } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/slice/cartSlice";

function ProductCard({ product}) {
  const navigate = useNavigate();
  
  function goToDetails() {
    navigate(`/products/${product.id}`);
  }
  const dispatch = useDispatch();
  const cart= useSelector((store)=>{
    return store.cart.cartList;
  })

  console.log(cart)
  function handleAddToCart(e) {
    e.stopPropagation();
    // console.log("addTocart()", addToCart)
    dispatch(addToCart({ ...product, qty: 1 }));

    // dispatch(addToCart())
    // const foundProduct=cart.find((value)=>{
    //   if(value.id === product.id){
    //     return true;
    //   }
    //   return false;
    // });
    // if(foundProduct){
    //   const updateCart=cart.map((value)=>{
    //     if(value.id===foundProduct.id){
    //       return{...value,qty:value.qty+1};
    //     }
    //     return value;
    //   })  ;
    //   setCart(updateCart)
    // }else{
    //   setCart([...cart,{...product,qty:1}])
    // }
  }
  // console.log("product",product);
  return (
    <Card
      className="max-w-sm"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={product.image}
      onClick={goToDetails}
    >
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {product.title}
      </h5>

      <div className="mb-5 mt-2.5 flex items-center">
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          {product.rating.rate}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          ${product.price}
        </span>
        <Button pill size="xs" color={"primary"} onClick={handleAddToCart}>
          <span className="flex items-center gap-1">
            <HiPlus /> <span>Add to cart</span>
          </span>
        </Button>
      </div>
    </Card>
  );
}

export default ProductCard;
