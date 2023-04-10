const phonePrefixes = [
  706, 803, 806, 810, 813, 814, 816, 903, 705, 805, 811, 815, 905, 701, 708,
  802, 808, 812, 902, 809, 817, 818, 909, 804, 908, 703, 915, 912, 916, 912,
  913, 907, 906, 904, 901, 819,
];

//search array for specific values
const inArray = (value, array) => {
  const index = array.indexOf(value);
  if (index === -1) {
    return false;
  } else {
    return index;
  }
};

export const validatePhoneNumber = (phoneNumber) => {
  let dialingCode, mobilePrefix, checkArray;

  // get value length
  const length = phoneNumber.length;

  //if length is less than the required length of 14
  if (length < 11) {
    return {
      isValid: false,
      error: "Phone number should be between 11 digits.",
    };
  }
  //if length is equal to 11 (070xxxxxxxx)
  if (length === 11) {
    //get mobile number prefix - 706 or 703 - depending on telco
    mobilePrefix = Number(phoneNumber.substr(1, 3));
    const firstFigure = Number(phoneNumber[0]);

    //check if mobile prefix exists in phonePrefixes array
    checkArray = inArray(mobilePrefix, phonePrefixes);
    if (checkArray === false) {
      return {
        isValid: false,
        error: "Invalid phone number prefix.",
      };
    }

    if (checkArray > 0 && firstFigure === 0) {
      return {
        isValid: true,
      };
    }

    return {
      isValid: false,
      error: "Invalid phone number.",
    };
  }

  return {
    isValid: true,
  };
};
