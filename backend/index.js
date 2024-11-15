const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const { Result } = require("postcss");
const cors = require("cors");
const { clear } = require("console");
const bodyParser =require('body-parser')
const stripe = require("stripe")("sk_test_51PIm15SFFVy8rMI1N2fZF4nOkIoPR4OLVhjHSozO130Cq7h5398P55GMCqc3yX4oQGaniwmNUmp1EtVIMMBLq6dX00xG7B4tg9")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.json())
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "food_menu",
  password: "123456",
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.listen("8080", () => {
  console.log("sever is listining to port 8080 ");
});

app.get("/", (req, res) => {
  res.send("Ok working main page");
});

app.get("/menu", (req, res) => {
  let q = `SELECT * FROM item`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (err) {
    console.log(err);
    res.send("Somthing Wrong in DB");
  }
});


app.post("/itemdelete",(req,res)=>{
  let q=`DELETE FROM item WHERE id = ?`;
  let d=req.body.id 

    try{
      connection.query(q ,d , (err,result)=>{
        if (err) throw err;
        console.log(result);
      })
    }catch(err){
      console.log(err);
    }
})


app.post("/additem",(req,res)=>{
  console.log(req.body);
  let q=`INSERT INTO item(DishName, Price, Category, Rating , img_url ) VALUES (?, ?, ?, ?, ? )`;

  let data =[ 
    req.body.name ,req.body.price ,req.body.catogary ,req.body.rating , req.body.img
  ];
   
  console.log(req.body);
  try{
    connection.query(q ,data , (err,result)=>{
      if (err) throw err;
      console.log(result);
    })
  }catch(err){
    console.log(err);
  }
 
});


app.get("/data/:id",(req,res)=>{
  let {id} =req.params;
  let q = `SELECT * FROM item WHERE id =( ?)`;

  try {
    connection.query(q, id , (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (err) {
    console.log(err);
    res.send("Somthing Wrong in DB");
  }
})

app.post("/updatedata",(req,res)=>{
  
  const {DishName,Price,Category,Rating,id,img_url}=req.body.item;

  let q=`UPDATE item SET DishName= ?,Price= ?,Category= ?, Rating= ? ,img_url=? WHERE id = ?`;
    console.log(req.body.item.img_url)
  try{
    connection.query(q ,[DishName,Price,Category,Rating,img_url,id] , (err,result)=>{
      if (err) throw err;
      console.log(result);
    })
  }catch(err){
    console.log(err);
  }

})

// view cart-------------------------------------------------------

app.get("/cart-value",(req,res)=>{
  let q=`SELECT * FROM cart`;
   
  
  try{
    connection.query(q  , (err,result)=>{
      if (err) throw err;
      res.send(result);
    })
  }catch(err){
    console.log(err);
  }
})

app.post("/add-to-cart",(req,res)=>{
  let q=`INSERT INTO cart(name, price, quantity ,img) VALUES (?, ?, ?,? )`;
console.log(req.body)
  let data=[
    req.body.data.DishName,
    req.body.data.Price,
    1,
    req.body.data.img_url
  ]

 
  try{
    connection.query(q ,data , (err,result)=>{
      if (err) throw err;
      console.log(result);
    })
  }catch(err){
    console.log(err);
  }
 
})
// -----------------Delete cart item--------------------------------------------------
app.post("/cart-item-Delete",(req,res)=>{
  let q=`DELETE FROM cart WHERE id = ?`;
  let id=req.body.id
console.log(id)

  try{
    connection.query(q , id, (err,result)=>{
      if (err) throw err;
      console.log(result);
    })
  }catch(err){
    console.log(err);
  }
})

// ------------------------------------Cart price value--------------------------

app.get("/cart-value-price",(req,res)=>{
  let q=`SELECT SUM(price) FROM cart`;

  try{
    connection.query(q , (err,result)=>{
      if (err) throw err; 
      res.send(result[0]['SUM(price)']);
    })
  }catch(err){
    console.log(err);
  }
})




app.get("/get-orders-data", (req, res) => {
  let q = `SELECT * FROM order_data`; // Corrected table name

  connection.query(q, (err, result) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Error fetching data from the database');
      return;
    }

    const filteredData = result.map(row => {
      const foodItem = (row.json_data);
       const Id =(row.id)
       const status=(row.status)
      return { name: foodItem.dishname, price: foodItem.price ,id:Id ,status:status };
    });

    res.send(filteredData);
  });
});


app.post("/send-order-data",(req,res)=>{
  let q=`INSERT INTO order_data(json_data) VALUES (?)`;
    
  let data = [
    JSON.stringify({ dishname: req.body.arrayData, price: req.body.cartTotalValue }) // Constructing the JSON string
  ];

  try{
    connection.query(q ,data, (err,result)=>{
      if (err) throw err; 
     console.log("Data stored")
    })
  }catch(err){
    console.log(err);
  }

})

app.post("/delete-order",(req,res)=>{
  let q=`DELETE FROM order_data WHERE id=(?)`;
    
  let data = [
    req.body.id
  ]

  try{
    connection.query(q ,data, (err,result)=>{
      if (err) throw err; 
     console.log("Order is successfully deleted");
    })
  }catch(err){
    console.log(err);
  }

})

app.post("/update-order-status",(req,res)=>{

  console.log(req.body)
  let q=`UPDATE order_data SET status = (?) WHERE id=(?)`;
    
  let data = [
    req.body.status,
    req.body.id
  ]

  try{
    connection.query(q ,data, (err,result)=>{
      if (err) throw err; 
     console.log("Order is successfully deleted");
    })
  }catch(err){
    console.log(err);
  }

})

// ----------------------stripe payment ---------------------

app.post("/api/create-checkout-session",async(req,res)=>{

    const {products}= req.body;

    const lineItems = products.map((product)=>({
      price_data:{
        currency:"inr",
        product_data:{
          name:product.name
        },
        unit_amount:product.price *100,
      },
      quantity:product.quantity
    }));

     const session = await stripe.checkout.sessions.create({
      payment_method_types:["card"],
      line_items:lineItems,
      mode:"payment",
      success_url:"http://localhost:5173/my-order",
      cancel_url:"http://localhost:5173/",
      customer_email: "test123@gmail.com",
      shipping_address_collection: {
          allowed_countries: ['US'],
      },
       
      // shipping_rates: {
      //   name: "Lakhbir",
      //   address: {
      //       line1: "Quantum university",
      //       line2: "",
      //       city: "Roorkee",
      //       state: "Uttrakhand",
      //       postal_code: "12345",
      //       country: 'IN',
      //   },
    // },

     });

     res.json({id:session.id})
  })

  app.post("/sign-up-data", (req, res) => {
    let id = 1;
    let name = "demo";
    let data = [
      id,
      name,
      req.body.email,
      req.body.password,
    ];
    console.log(data);
    let q = `INSERT INTO user_data(id, name, email, password) VALUES(?, ?, ?, ?)`;
  
    connection.query(q, data, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error inserting data");
      } else {
        console.log("Successfully added!");
        res.send(data)
      }
    });
  });
  




