const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const port =process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes")) 
app.use(errorHandler);
app.listen(port, () =>{
    console.log(`Server running on the port ${port}`)
});