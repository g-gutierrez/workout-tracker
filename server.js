// setup dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// configure port
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

// establish mongo connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// setup routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// configure app to port
app.listen(PORT,function(){ 
    console.log(`App listening on Port ${PORT}`);
});