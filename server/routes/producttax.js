const router = require("express").Router();
const User = require("../models/User");
const ProductTax = require("../models/ProductsTax");

//CREATE POST
router.post("/create", async (req, res) => {
  const newProductTax = new ProductTax(req.body);
  try {
    const savedProductTax = await newProductTax.save();
    res.status(200).json(savedProductTax);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get Single post
router.get("/get/:id", async (req, res) => {
  try {
    const singleproducttax = await ProductTax.findById(req.params.id);
    res.status(200).json(singleproducttax);
  } catch (err) {
    res.status(500).json(err);
  }
});
//UPDATE POST
router.put("/update/:id", async (req, res) => {
  try {
    const producttax = await ProductTax.findById(req.params.id);
    if (producttax.username === req.body.username) {
      try {
        const updatedProductTax = await ProductTax.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedProductTax);
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
    const producttax = await ProductTax.findById(req.params.id);
    if (producttax.username === req.body.username) {
      try {
        await ProductTax.findByIdAndDelete(req.params.id);
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
router.get('/allproductstax', async (req, res) => {
    try {
      const productstax = await ProductTax.find();
      res.status(200).json(productstax);
    } catch (error) {
      res.status(500).json(error);
    }
  });

module.exports = router;
