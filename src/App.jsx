import React, { createContext, useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import { Flowbite } from "flowbite-react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  const customTheme = {
    card: {
      root: {
        base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
        children: "flex h-full flex-col justify-between gap-2 p-4",
        horizontal: {
          off: "flex-col",
          on: "flex-col md:max-w-xl md:flex-row",
        },
        href: "hover:bg-gray-100 dark:hover:bg-gray-700",
      },
      img: {
        base: "",
        horizontal: {
          off: "rounded-t-lg h-[200px] w-full object-contain p-2",
          on: "h-[200px] w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
        },
      },
    },
    button: {
      color: {
        primary: "bg-orange-500 hover:bg-orange-600 text-white",
      },
    },
  };
  return (
    <Provider store={store}>
      <cartContext.Provider value={{ cart, setCart }}>
        <Flowbite theme={{ theme: customTheme }}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<Layout cart={cart} setCart={setCart} />}
              >
                <Route
                  index
                  element={<Home cart={cart} setCart={setCart} />}
                ></Route>
                <Route
                  path="/products/:id"
                  element={<ProductDetail cart={cart} setCart={setCart} />}
                ></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </Flowbite>
      </cartContext.Provider>
    </Provider>
  );
}

export default App;
