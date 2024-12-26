import React from 'react'
import MyNavbar from './MyNavbar'
import MyFooter from './MyFooter'
import { Outlet } from 'react-router-dom'

function Layout({cart,setCart}) {
  return (
    <div>
      <MyNavbar cart={cart} setCart={setCart} />
      <Outlet/>
      <MyFooter/>
    </div>
  )
}

export default Layout
