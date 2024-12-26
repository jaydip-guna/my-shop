export function getAllProducts() {
  return fetch("https://fakestoreapi.com/products")
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
export function getSingleproduct(id) {
  return fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
export function getAllCategories() {
  return fetch(`https://fakestoreapi.com/products/categories`)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
export function getCategoryProduct(categories) {
  return fetch(`https://fakestoreapi.com/products/category/${categories}`)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
