/**
 * validateEmail checks to see if string is  valid email.
 *
 * @param email
 */
export const validateEmail = (email) => {
  if (email.trim().length < 5) {
    return {
      isValid: false,
      error: "Please, enter a valid email.",
    };
  }

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      isValid: true,
    };
  }

  return {
    isValid: false,
    error: "Please, enter a valid email.",
  };
};
