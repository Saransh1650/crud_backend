const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended : true}));

app.listen(2000, ()=>{
    console.log("listening to port 2000");
});

const productData = [];

//post api
app.post("/api/add_product", (req,res)=>{
    console.log("Result", req.body);

    const pdata = {
        "id": productData.length + 1,
        "name": req.body.name,
        "price": req.body.price,
        "desc" : req.body.desc

    }

    productData.push(pdata);
    console.log("Final", productData);

    res.status(200).send({
        "status-code": 200,
        "message": "Product added Successfully",
        "Product": pdata
    });
});