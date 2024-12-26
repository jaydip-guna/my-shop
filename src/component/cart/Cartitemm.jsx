
import { Button } from 'flowbite-react';
import React from 'react'
import { HiTrash, HiPlus, HiMinus } from "react-icons/hi";
import { useDispatch } from 'react-redux';
import { decreaseQty, increaseQty, removeFromCart } from '../../redux/slice/cartSlice';

function Cartitemm({product,cart,setCart}) {
  const dispatch=useDispatch();
    function handleDelete(){
    dispatch(removeFromCart(product.id));
    //     const updatedCart=cart.filter((value)=>{
    //         if(value.id=== product.id){
    //             return false
    //         }
    //         return  true;
    //     });
    // setCart(updatedCart);
    }
    function handleIncrease() {
      dispatch(increaseQty(product.id))
        // const updatedCart = cart.map((value) => {
        //   if (value.id === product.id) {
        //     return { ...value, qty: value.qty + 1 };
        //   }
        //   return value;
        // });
        // setCart(updatedCart);
      }
      function handleDecrease() {
        dispatch(decreaseQty(product.id));
        // const updatedCart = cart.map((value) => {
        //   if (value.id === product.id) {
        //     if (value.qty > 1) {
        //       return { ...value, qty: value.qty - 1 };
        //     }
        //     return value;
        //   }
        //   return value;
        // });
        // setCart(updatedCart);
      }
    console.log(product);
  return (
    <div className='flex'>
      <div className='h-[50px] w-[50px]'>
        <img src={product.image} alt=""  className='h-full w-full border rounded-full object-contain'/>
      </div> 
      <div className="flex flex-col gap-1 grow-[1]">
        <p className="text-sm">{product.title}</p>
        <p className="text-sm font-semibold">${product.price}</p>
        <div className="flex items-center gap-1">
          <Button size="xs" className="p-0" pill onClick={handleDecrease}>
            <HiMinus />
          </Button>
          <p>{product.qty}</p>
          <Button size="xs" className="p-0" pill onClick={handleIncrease}>
            <HiPlus />
          </Button>
        </div>
      </div>
      <div>
        <Button size="xs" pill onClick={handleDelete}>
          <HiTrash />
        </Button>
      </div>
    </div>
  )
}

export default Cartitemm

// import React from 'react'

// function Cartitemm() {
//   return (
//     <div>
//       hello
//     </div>
//   )
// }

// export default Cartitemm
