const router = require("express").Router();
let Customer = require("../models/Customer-model");

router.route("/").post((req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const address=req.body.address;
    const phone=req.body.phone;

    const newCustomer = new Customer({

        username,
        email,
        address,
        phone
    })
    newCustomer.save().then(()=>{
        res.json("Customer details Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{
    Customer.find().then((customer)=>{
        res.json(customer)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/:id").put(async (req,res) => {
    let userId = req.params.id;
    const {username, email,address,phone} = req.body;

    const updateCustomer = {
        username,
        email,
        address,
        phone
    }
    const update = await  Customer.findByIdAndUpdate(userId, updateCustomer)
    .then(() => {
        res.status(200).send({status: "Customer Details Updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.messege});
    })
})


router.route("/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await Customer.findByIdAndDelete(userId)
    .then(() =>{
        res.status(200).send({status: "Contact deleted"});
    }).catch((errr) => {
        console.log(err.messege);
        res.status(500).send({status: "Error with delete user", error: err.messege});
    })
})

router.route("/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await Customer.findById(userId)
    .then((customer) => {
        res.status(200).send({status: "Single Customer details fetched", customer})
    }).catch(() => {
        console.log(err.messege);
        res.status(500).send({status: "Error with get user",error: err.messege});
    })
})
module.exports = router;