import { validateText } from "./validateText";

/**
 * validateName checks to see if string is  valid name and contains just one word.
 *
 * @param {string} name
 */
export const validateName = (name) => {
  const n = validateText(name);

  if (!n.isValid) {
    return { isValid: false, error: "Please enter a name" };
  }

  if (/\s/g.test(name)) {
    return {
      isValid: false,
      error: "Please enter just a name",
    };
  }

  return {
    isValid: true,
  };
};
