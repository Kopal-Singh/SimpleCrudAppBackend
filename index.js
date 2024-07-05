//going to be the brain of the backend

const express = require("express");
const mongoose = require('mongoose');
const ProductSchema = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false})); 

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


// app.get("/", (req, res) => { 
// 	res.send("Hello from Node API server Updated ");//whenever the default page is visited, a response is sent from the node API saying hello from node API
// });

// app.get("/api/products/", async (req, res) => {
// 	try  {
// 		const products = await ProductSchema.find({});
// 		res.status(200).json(products);
// 	}
// 	catch (error){
// 		res.status(500).json({message: error.message});
// 	}
// });

// app.get("/api/product/:id", async (req, res) => {
// 	try {
// 		const { id } = req.params;
// 		const product = await ProductSchema.findById(id);
// 		res.status(200).json(product);
// 	} catch {
// 		res.status(500).json({message: error.message});
// 	}
// });

// app.post("/api/products", async (req, res) => {
// 	try {
// 		console.log(req.body);
// 		const { name , quantity, price} = req.body;
// 		const product = await ProductSchema.create({
// 			name,
// 			quantity,
// 			price
// 		}); //await must be accompanied by async
// 		res.status(200).json(product);
// 	} catch (error) {
// 		res.status(500).json({message: error.message});
// 	}
// });

// //update a product
// app.put("/api/product/:id", async (req, res) => {
// 	try {
// 		const {id} = req.params;

// 		const product = await ProductSchema.findByIdAndUpdate(id, req.body);

// 		if (!product){
// 			return res.status(404).json({message: "Product not found"});
// 		}

// 		const updatedProduct = await ProductSchema.findById(id);
// 		res.status(200).json(updatedProduct);

// 	} catch(error) {
// 		res.status(500).json({message: error.message});
// 	}
// });

// //delete a product
// app.delete("/api/product/:id", async (req, res) => {
// 	try {
// 		const {id} = req.params;

// 		const product = await ProductSchema.findByIdAndDelete(id);
		
// 		if(!product){
// 			return res.status(404).json({message: "Product not found"});
// 		}

// 		res.status(200).json({message: "Product deleted successfully"});

// 	} catch (error){
// 		res.status(500).json({message: error.message});
// 	}
// });

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
