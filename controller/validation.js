module.exports = {
  isStrValid: function (str) {
    str = str.trim();
    let regex = /^[A-Za-z\-]+$/;
    if (str.match(regex)) {
      return true;
    }else{
      return false;
    }
  },
  isEmailValid: function (email) {
    let regex  = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(email.match(regex)) {
      return true;
    }else{
      return false;
    }
  },
  isAmountValid: function (amount) {
    amount = amount.toString();
    let regex = /^[0-9]*$/;
    if (amount.match(regex)) {
      return true;
    }else{
      return false;
    }
  },
  isDateValid: function (date) {
    if (new Date(date) != "Invalid Date" ) {
      return true;
    }else{
      return false;
    }
  },
  isPhoneValid: function (phone_number) {
    phone_number = phone_number.toString();
    let regex = /^\d{11}$/;
    if (phone_number.match(regex)) {
      return true;
    }else{
      return false;
    }
  },
  isIdentityValid: function (identity) {
    identity = identity.toString();
    let regex = /^[0-9a-zA-Z]+$/;
    if (identity.match(regex)) {
      return true;
    }else{
      return false;
    }
  },

}