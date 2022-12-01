/**
 * validatePassword checks to see if string is valid password,
 *
 * @param text
 */
export function validatePassword(text) {
  if (!text.trim()) {
    return {
      isValid: false,
      error: "Password field is required",
    };
  }

  if (text.trim().length < 6) {
    return {
      isValid: false,
      error: "Minimum length is 6 characters",
    };
  }

  if (!/[A-Z]/.test(text)) {
    return {
      isValid: false,
      error: "Password must contain at least an uppercase letter",
    };
  }

  if (!/\d/.test(text)) {
    return {
      isValid: false,
      error: "Password must contain at least a number",
    };
  }

  return {
    isValid: true,
  };
}
