const dateTime = {
  type: Date,
  required: true,
};

const string = {
  type: String,
  minLength: 3,
  maxLength: 15,
  required: true,
};

const numbers = {
  type: Number,
  minLength: 3,
  maxLength: 10,
  required: true,
};

const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
const phoneRegex = /^\d{10}$/;
const alphanumericSpacesRegex = /^[a-zA-Z0-9\s]*$/;
// const alphaNumericRegex = /^[a-zA-Z0-9]*$/;
const alphaSpacesRegex = /^[a-zA-Z\s]*$/;
const alphaRegex = /^[a-zA-Z]*$/;

module.exports = {
  dateTime,
  string,
  numbers,
  emailRegex,
  phoneRegex,
  alphanumericSpacesRegex,
  alphaSpacesRegex,
  alphaRegex,
};
