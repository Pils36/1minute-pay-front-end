import { validateEmail } from "./validateEmail";
import { validateName } from "./validateName";
import { validatePassword } from "./validatePassword";
import { validatePhoneNumber } from "./validatePhoneNumber";
import { validateText } from "./validateText";

/**
 * validateContactUs checks if all fields in sign up form to see if they are valid.
 *
 * Returns object with error messages for fields that contain errors.
 *
 * @param ValidateContactUsProps
 */
export function validateContactUs({
  firstName,
  lastName,
  email,
  phoneNumber,
  message,
}) {
  const f = validateName(firstName);
  const l = validateName(lastName);
  const u = validatePhoneNumber(phoneNumber);
  const e = validateEmail(email);
  const m = validateText(message);

  const v = {
    isValid: true,
    error: undefined,
  };

  if (!u.isValid) {
    v.isValid = false;
    v.error = {
      ...v.error,
      phoneNumber: u.error,
    };
  }

  if (!f.isValid) {
    v.isValid = false;
    v.error = {
      ...v.error,
      firstName: f.error,
    };
  }

  if (!l.isValid) {
    v.isValid = false;
    v.error = {
      ...v.error,
      lastName: l.error,
    };
  }

  if (!e.isValid) {
    v.isValid = false;
    v.error = {
      ...v.error,
      email: e.error,
    };
  }

  if (!m.isValid) {
    v.isValid = false;
    v.error = {
      ...v.error,
      message: "Please, enter a message",
    };
  }

  return v;
}
