// import { Drawer } from 'flowbite-react'
// import React from 'react'
// import { HiShoppingCart } from "react-icons/hi";
// import Cartitemm from '../component/cart/Cartitemm'

// function CartDrawer({cart, setCart, isOpen, toggleOpen }) {
//   return (
//     <Drawer position="right" open={isOpen} onClose={toggleOpen}>
//     <Drawer.Header title="Drawer"  titleIcon={HiShoppingCart} />
//     <div>
//       {
//         cart.map((value)=>{
//           return  <Cartitemm product={value} cart={cart} setCart={setCart} />
//         })
//       }
//     </div>
//   </Drawer>
//   )
// }

// export default CartDrawer
import { Drawer } from 'flowbite-react'
import { HiShoppingCart } from "react-icons/hi";
import React, { useContext } from 'react'
import Cartitemm from '../component/cart/Cartitemm';
import { useSelector } from 'react-redux';
import { cartContext } from '../App';


function CartDrawer({isOpen,toggleOpen}) {
  const value = useContext(cartContext);
  const {setCart}= value;
const cart=useSelector((store)=>{
  return store.cart.cartList;
})
  return (
    <div>
       <Drawer position="right" open={isOpen} onClose={toggleOpen}>
        <Drawer.Header title="Drawer"  titleIcon={HiShoppingCart} />
        <div>
          {
            cart.map((value)=>{
              return(
                <Cartitemm product={value} cart={cart} setCart={setCart} />
              );
            })
          }
          
     </div>
      </Drawer>
    </div>
  )
}

export default CartDrawer
 