const express = require("express");
const products = require("./products");
const cart = require("./cart");
const app = express();
const port = 3000;

// HTTP Methods
// app.get() - get
// app.post() - adding
// app.put() - update
// app.delete() - delete

// Status
// 200 - 299 = Success

// == Middleware ==
app.use(express.json());

// Define a route
// .get(route/URL, callbackFunction (Route Handler))
app.get("/api/products", (request, response) => {
  response.status(200).json(products);
});

// Route Parameter
// parameter: placeholder
app.get("/api/products/:productId", (request, response) => {
  // req.params - return an object that contains the arguments for the router paramater.
  const productId = parseInt(request.params.productId);

  //   .find(): return the first element that pass the test condition.
  const product = products.find(
    (productObject) => productObject.id === productId
  );

  if (product) {
    response.status(200).json(product);
  } else {
    response.status(404).json({ message: "Product not found." });
  }
});

function generateUniqueId() {
  if (products.length === 0) {
    return 1;
  }
  const lastProductObject = products[products.length - 1];
  return lastProductObject.id + 1;
}

app.post("/api/products", (request, response) => {
  const { name, price } = request.body;

  if (!name || !price) {
    // 400: Bad request
    return response
      .status(400)
      .json({ message: "Name and price are required." });
  }
  const newProduct = {
    id: generateUniqueId(),
    name,
    price,
  };

  products.push(newProduct);
  // 200: OK or Successful.
  // 201: Successfully created.
  response.status(201).json({ message: "Product added to the product list." });
});

// Update (Route Handler)
app.put("/api/products/:productId", (request, response) => {
  const productId = parseInt(request.params.productId);
  const { name, price } = request.body;

  if (!name || !price) {
    return response
      .status(400)
      .json({ message: "Name and price is required." });
  }

  const product = products.find(
    (productObject) => productObject.id === productId
  );

  if (product) {
    product.name = name;
    product.price = price;
    response.status(200).json({ message: "Product updated successfully!" });
  } else {
    response.status(404).json({ message: "Product not found" });
  }

  response.status(200).json({ product: product, price: price });
});

// Route Handler to delete
app.delete("/api/products/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);

  const productIndex = products.findIndex(
    (productObject) => productObject.id === productId
  );

  if (productIndex !== -1) {
    // .splice(): add or delete element/s at a specified index
    // 1st argument: start
    // 2nd argument: delete count
    // 3rd argument: element/s you want to add
    products.splice(productIndex, 1);
    res.status(200).json({ message: "Product deleted successfully!" });
  } else {
    res.status(404).json({ message: "Product not found." });
  }
});

// Adding products to Cart (Route Handler)

app.post("/api/cart", (req, res) => {
  const productId = req.body.productId;

  const product = products.find(
    (productObject) => productObject.id === productId
  );

  if (product) {
    cart.push(product);
    res.status(201).json({ message: "Product added to cart." });
  } else {
    res.status(404).json({ message: "Product not found." });
  }
});

app.get("/api/cart", (req, res) => {
  res.status(200).json({ cart: cart });
});

// Removing object from the Cart (Route Handler)
app.delete("/api/cart/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);

  const index = cart.findIndex(
    (productObject) => productObject.id === productId
  );

  if (index !== -1) {
    cart.splice(index, 1);
    res.status(200).json({ message: "Product removed from cart." });
  } else {
    res.status(404).json({ message: "Product not found in cart." });
  }
});

// app.listen(): start the server on a specified port.
app.listen(port, () => {
  console.log("Server is listening to port:", port);
});
