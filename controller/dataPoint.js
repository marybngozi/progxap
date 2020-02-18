const mysql = require('mysql');
const v = require('./validation');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "iammary1",
  database: "progxap"
});


module.exports = {
  dataParser: function (req, res) {
    let failedData = [];
    let passedData = [];

    for(let data of req.body) {
      // console.log(data);
      let {surname, name, othernames, state, amount, charge_on_amount, datePosted, email_address, phoneNumber, identity} = data;
      if (v.isStrValid(surname) && v.isStrValid(name) && v.isStrValid(othernames) && v.isStrValid(state) && v.isAmountValid(amount) && v.isAmountValid(charge_on_amount) && v.isDateValid(datePosted) && v.isEmailValid(email_address) && v.isPhoneValid(phoneNumber) && v.isIdentityValid(identity)) {
        passedData.push(data);
      }else{
        failedData.push(data);
      }
    }

    con.connect(function(err) {
      if (err) console.log(err);
      console.log("Connected!");
      let sql = "INSERT INTO `user_data` (surname, name, othernames, state, amount, charge_on_amount, datePosted, email_address, phoneNumber, identity) VALUES ?";
      let values = [];

      for (const data of passedData) {
        let {surname, name, othernames, state, amount, charge_on_amount, datePosted, email_address, phoneNumber, identity} = data;
        values.push(Object.values({surname, name, othernames, state, amount, charge_on_amount, datePosted, email_address, phoneNumber, identity}));
      }

      if (values.length > 0) {
        con.query(sql, [values], (err, result) => {
          if (err) console.log(err);
          console.log("Number of records inserted: " + result.affectedRows);
        });
      }else{
        console.log("No valid record to insert");
        console.log("Number of records inserted: 0");
      }

    });


    return res.status(200).json({
      numnerOfRecordsRecieved: req.body.length,
      numberOfRecordsAdded: passedData.length,
      numberOfRecordsRejected: failedData.length,
      recordRejected: failedData
    });
  }
}