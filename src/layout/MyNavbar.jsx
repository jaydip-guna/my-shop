import { Button, Navbar, NavbarLink } from "flowbite-react";
import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { COMPANY_NAME, LOGO } from "../const/consts";
import { Link } from "react-router-dom";
import CartDrawer from "./CartDrawer";
// import CartDrawer from "./CartDrawer";

const links = [
  { link: "/", text: "Home" },
  { link: "/about", text: "About" },
  { link: "/faqs", text: "FAQs" },
  { link: "/contact", text: "Contact" },
];

function MyNavbar({ cart, setCart }) {
  const [isopen, setIsopen] = useState(false);
  function toggleOpen() {
    setIsopen(!isopen);
  }
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img src={LOGO} className="mr-3 h-6 sm:h-9" alt={COMPANY_NAME} />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            {COMPANY_NAME}
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button
            pill
            size="sm"
            className=""
            color="primary"
            onClick={toggleOpen}
          >
            <span className="flex item-center gap-1">
              <HiShoppingCart className="w-4 h-4" />
              <span>Cart</span>
            </span>
          </Button>
        </div>
        <Navbar.Collapse>
          {links.map((Value) => {
           return  (<NavbarLink as={Link} to={Value.link}>
              {Value.text}
            </NavbarLink>);
          })}
        </Navbar.Collapse>
      </Navbar>
      {/* <CartDrawer
        isOpen={isopen}
        toggleOpen={toggleOpen}
        cart={cart}
        setCart={setCart}
      /> */}
      <CartDrawer 
      isOpen={isopen}
       toggleOpen={toggleOpen}
       cart={cart}
       setCart={setCart}
       />
    </>
  );
}

export default MyNavbar;
