// import { Label, Radio, Select } from "flowbite-react";

// <div className="p-8">
// <div className="flex justify-end mb-4">
//   <Select className="w-fit" onChange={handleSelect}>
//     <option value="asc">Ascending</option>
//     <option value="desc">Descending</option>
//   </Select>
// </div>
// <div className="grid grid-cols-[200px_1fr] gap-4">
//   <div>
//     <h2 className="text-lg font-semibold">Categories</h2>
//     <ul className="mt-2 flex flex-col gap-2">
//       <li key={"all"} className="flex items-center gap-2">
//         <Radio
//           id={"all"}
//           className="cursor-pointer"
//           name="category"
//           value={"all"}
//           onChange={handleChange}
//         />
//         <Label htmlFor={"all"}>{"all"}</Label>
//       </li>
//       {categories?.map((value) => {
//         return (
//           <li key={value} className="flex items-center gap-2">
//             <Radio
//               id={value}
//               className="cursor-pointer"
//               name="category"
//               value={value}
//               onChange={handleChange}
//             />
//             <Label htmlFor={value}>{value}</Label>
//           </li>
//         );
//       })}
//     </ul>
//   </div>
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
//     {products.map((value) => {
//       return <ProductCard key={value.id} product={value} />;
//     })}
//   </div>
// </div>
// </div>

// export default Home;
import React, { useEffect, useState } from "react";
// import ProductCard from "../Components/Home/ProductCard";
// import {
//   getAllCategories,
//   // getAllProduct,
//   getAllCategories,
// } from "../Services/apiServices";
import { Radio } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getAllProducts } from "../services/apiServices";
import ProductCard from "../component/home/ProductCard";
// import { getAllProducts } from "../redux/slice/productSlice";

function Home() {
  const [products,setProduct] = useState(null);

  const product = useSelector((store) => {
    return store.product.product;
  });
  const dispatch = useDispatch();
  if (!products) {
    dispatch(getAllProducts);
  }

  useEffect(() => {
    getAllProducts().then((data) => {
      setProduct(data);
    });
  }, []);
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  function handleChange(e) {
    if (e.target.id === "All") {
      getAllProducts().then((data)=>{
        setProduct(data);
      })
    } else {
      getAllCategories(e.target.id).then((data) => {
        setProduct(data);
      })
    }
    // console.log(e.target.id)
  }
  if (!product) return null;
  if (!categories) return null;
  return (
    <>
      <div className="grid grid-cols-[200px_1fr]">
        <div className="">
          <h2 className="ml-5 text-lg">Categories</h2>
          <ul className="ml-3 flex flex-col gap-2">
            <li key={"All"} className="ml-4">
              <Radio
                className="cursor-pointer "
                name="category"
                id={"All"}
                value={"All"}
                onChange={handleChange}
              />
              <label htmlFor={"All"} className="ml-2">
                {"All"}
              </label>
            </li>

            {categories.map((value) => {
              return (
                <li className="ml-4" key={value}>
                  <Radio
                    className="cursor-pointer"
                    name="category"
                    key="value"
                    id={value}
                    onChange={handleChange}
                  />
                  <label htmlFor={value} className="ml-2">
                    {value}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>

        <div className=" grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 p-4 gap-6">
          {product.map((product) => {
            return <ProductCard key={product.id} products={product} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
