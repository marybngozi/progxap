const express = require("express");
const dataPoint = require("./controller/dataPoint");

const app = express();
const dataParser = dataPoint.dataParser;
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.post("/new_data", dataParser)

app.listen(port, () => {
  console.log(`Running on port ${port}`);
})