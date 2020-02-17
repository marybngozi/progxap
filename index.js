const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.post("/new_data", (req, res) => {
  
})

app.listen(port, () => {
  console.log(`Running on port ${port}`);
})