const express = require("express");
const products = require("./products");
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

// app.listen(): start the server on a specified port.
app.listen(port, () => {
  console.log("Server is listening to port:", port);
});
