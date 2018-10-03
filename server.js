const express = require("express");
const mongoose = require("mongoose");
const bodyParser=require("body-Parser");
const app = express();

//引入users.js
const users = require("./routes/api/users");
//DB config
const db = require("./config/keys").mongoURI;

//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

//connect to mongodb
mongoose.connect(db)
    .then(() => console.log("MongoDb connected"))
    .catch(err => console.log(err));
app.get("/", (req, res) => {
    res.send("hello world");
});

//使用routes
app.use("/api/users", users);

const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
})