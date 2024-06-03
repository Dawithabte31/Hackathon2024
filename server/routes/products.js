const router = require("express").Router();
const User = require("../models/User");
const Product = require("../models/Product");


//CREATE POST
router.post("/create", async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get Single post
router.get("/get/:id", async (req, res) => {
  try {
    const singleproduct = await Product.findById(req.params.id);
    res.status(200).json(singleproduct);
  } catch (err) {
    res.status(500).json(err);
  }
});
//UPDATE POST
router.put("/update/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product.username === req.body.username) {
      try {
        const updatedProduct = await Product.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedProduct);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE POST
router.delete("/delete/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product.username === req.body.username) {
      try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get('/allproducts', async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json(error);
    }
  });

module.exports = router;
