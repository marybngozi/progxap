const express = require("express");
const dataParser = require("./controller/dataParser");

const app = express();
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

console.log(dataParser);
// app.get("/new_data", dataParser)

app.listen(port, () => {
  console.log(`Running on port ${port}`);
})