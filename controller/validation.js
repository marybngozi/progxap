module.exports = {
  isStrValid: function (str) {
    str = str.trim();
    let regex = /^[A-Za-z]+$/;
    if (str.match(regex)) {
      return true;
    }else{
      return false;
    }
  },
  isEmailValid: function (email) {
    let regex  = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if(email.match(regex)) {
      return true;
    }else{
      return false;
    }
  },
  isAmountValid: function (amount) {
    let regex = /^[0-9]*$/;
    if (amount.match(regex)) {
      return true;
    }else{
      return false;
    }
  },
  isDateValid: function (date) {
    if (new Date(date)) {
      return true;
    }else{
      return false;
    }
  },
  isPhoneValid: function (phone_number) {
    let regex = /^\d{11}$/;
    if (phone_number.match(regex)) {
      return true;
    }else{
      return false;
    }
  },
  isIdentityValid: function (identity) {
    let regex = /^[0-9a-zA-Z]+$/;
    if (identity.match(regex)) {
      return true;
    }else{
      return false;
    }
  },
}