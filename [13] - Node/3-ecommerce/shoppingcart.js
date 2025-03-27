let cart = [];

function displayCart() {
  console.log("Cart:", cart);
}

function addToCart(productObject) {
  console.log(`${productObject.name} added to cart.`);
  cart.push(productObject);
}

function calcSubTotal() {
  let subTotal = 0;
  cart.forEach((productObject) => (subTotal += productObject.price));
  return subTotal;
}

module.exports = {
  displayCart,
  addToCart,
  calcSubTotal,
};
