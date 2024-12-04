const express = require ("express");
const path = require ("path");
const UserRoute = require("./Routes/User.Route");
const app = express();
app.set("view engine" , "ejs");
app.set("Views" , path.join(__dirname , "Views"))
app.use(express.static(path.join(__dirname , "Public")));

app.use("/User" , UserRoute)
app.listen(3000 , () => {
    console.log("Server is running on port 3000");
})