/* eslint-disable */
import "bootstrap";
import { Alert } from "bootstrap";
import "./style.css";

const CREDITCARD = document.querySelector("#FormControlInput1");
const CVC = document.querySelector("#FormControlInput2");
const AMOUNT = document.querySelector("#FormControlInput3");
const FIRSTNAME = document.querySelector("#FormControlInput4");
const LASTNAME = document.querySelector("#FormControlInput5");
const CITY = document.querySelector("#FormControlInput6");
const STATE = document.querySelector("#exampleDataList");
const LIST = document.querySelectorAll("option");
const POSTALCODE = document.querySelector("#FormControlInput8");
const MESSAGE = document.querySelector("#FormControlTextarea1");

window.onload = () => {};

CREDITCARD.addEventListener("focusout", () => {
  if (
    (CREDITCARD.value.length == 16 || CREDITCARD.value.length == 19) &&
    isNum(CREDITCARD.value) &&
    checkLuhn(CREDITCARD.value)
  ) {
    isValid(CREDITCARD);
  } else {
    isInvalid(CREDITCARD);
  }
});
CVC.addEventListener("focusout", () => {
  if ((CVC.value.length == 3 || CVC.value.length == 4) && isNum(CVC.value)) {
    isValid(CVC);
  } else {
    isInvalid(CVC);
  }
});

AMOUNT.addEventListener("focusout", () => {
  if (isNum(AMOUNT.value)) {
    isValid(AMOUNT);
  } else {
    isInvalid(AMOUNT);
  }
});

FIRSTNAME.addEventListener("focusout", () => {
  if (isText(FIRSTNAME.value) && FIRSTNAME.value.length >= 2) {
    isValid(FIRSTNAME);
  } else {
    isInvalid(FIRSTNAME);
  }
});

LASTNAME.addEventListener("focusout", () => {
  if (isText(LASTNAME.value) && LASTNAME.value.length >= 2) {
    isValid(LASTNAME);
  } else {
    isInvalid(LASTNAME);
  }
});

let stateName = [];
for (const element in LIST) {
  stateName.push(LIST[element].value);
}

STATE.addEventListener("focusout", () => {
  stateName.some(e => e == STATE.value) ? isValid(STATE) : isInvalid(STATE);
});

CITY.addEventListener("focusout", () => {
  if (isText(CITY.value) && CITY.value.length >= 2) {
    isValid(CITY);
  } else {
    isInvalid(CITY);
  }
});

POSTALCODE.addEventListener("focusout", () => {
  isNum(POSTALCODE.value) ? isValid(POSTALCODE) : isInvalid(POSTALCODE);
});

MESSAGE.addEventListener("focusout", () => {
  if (MESSAGE.value.length >= 0 && MESSAGE.value.length <= 250) {
    isValid(MESSAGE);
  } else {
    isInvalid(MESSAGE);
  }
});

const isValid = input => {
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
};

const isInvalid = input => {
  input.classList.remove("is-valid");
  input.classList.add("is-invalid");
};

const isText = text => {
  return /^[a-zñA-ZÑ ]+$/.test(text);
};

const isNum = number => {
  return number % 1 == 0 && number >= 0;
};

function checkLuhn(value) {
  if (/[^0-9-\s]+/.test(value)) return false;

  var nCheck = 0,
    nDigit = 0,
    bEven = false;
  value = value.replace(/\D/g, "");

  for (var n = value.length - 1; n >= 0; n--) {
    var cDigit = value.charAt(n),
      nDigit = parseInt(cDigit, 10);

    if (bEven) {
      if ((nDigit *= 2) > 9) nDigit -= 9;
    }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return nCheck % 10 == 0;
}
