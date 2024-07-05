const express = require("express");
const mongoose = require("mongoose");
const ProductSchema = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

//connecting MongoDB 
//username: kopals06
//password: ko_PAL!@12 = ko_PAL%21%4012

mongoose.connect("mongodb+srv://kopals06:ko_PAL%21%4012@backenddb.uzezs4b.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
	console.log("Connected to database!");
	app.listen(3000, () => {
		console.log("Server is running on port 3000");
	});
})
.catch(() => {
	console.log("Connection failed!");
})
