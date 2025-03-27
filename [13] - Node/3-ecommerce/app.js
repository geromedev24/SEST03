const products = require("./products");
const cart = require("./shoppingcart");

// Problem: user can manipulate the data directly.
// console.log("Products:", products);
// console.log("Products:", (products[0].price = 100));

// console.log("Products:", products);
products.displayProducts();
console.log("Smart Phone:", products.getProduct(2));

cart.displayCart();
cart.addToCart(products.getProduct(2));
cart.addToCart(products.getProduct(3));
cart.displayCart();

// console.log(`Your Subtotal is ${cart.calcSubTotal()}`);
console.log("Your Subtotal is:", cart.calcSubTotal());
