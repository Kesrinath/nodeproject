const express = require("express");
const mongoose = require("mongoose");
const app = express();
const ejs = require("ejs"); // Add this line

app.set("view engine", "ejs"); // Add this line

// ...rest of your code...

// Connect to MongoDB Atlas
mongoose.connect(
  "mongodb+srv://knmsurajmishra001:q3GegvScDSuSwrxF@playerdata.hox9xb0.mongodb.net/",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// Set up routes (to be created)
app.use("/", require("./routes"));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
