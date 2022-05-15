const router = require("express").Router();
let Wishlist = require("../models/Wishlist-model");

router.route("/").post((req,res)=>{
    const buyerID = req.body.buyerID;
    const productname = req.body.productname;
    const price=req.body.price;
    

    const newWishr= new Wishlist({

        buyerID,
        productname,
        price,
       
    })
    newWishr.save().then(()=>{
        res.json("wishlist details Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{
    Wishlist.find().then((wishlist)=>{
        res.json(wishlist)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/:id").put(async (req,res) => {
    let userId = req.params.id;
    const {buyerID, productname,price} = req.body;

    const updateWishlistr = {
        buyerID,
        productname,
        price
    }
    const update = await  Wishlist.findByIdAndUpdate(userId, updateWishlistr)
    .then(() => {
        res.status(200).send({status: "Wishlist Updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.messege});
    })
})


router.route("/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await Wishlist.findByIdAndDelete(userId)
    .then(() =>{
        res.status(200).send({status: "Wishlist deleted"});
    }).catch((errr) => {
        console.log(err.messege);
        res.status(500).send({status: "Error with delete Wishlist", error: err.messege});
    })
})
router.route("/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await Wishlist.findById(userId)
    .then((wishlist) => {
        res.status(200).send({status: "Single Wishlist details fetched", wishlist})
    }).catch(() => {
        console.log(err.messege);
        res.status(500).send({status: "Error with get Wishlist",error: err.messege});
    })
})
module.exports = router;