/** capitalize Text takes a string and makes the first letter uppercase
 *
 * @param {string} text
 */

export const capitalizeText = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
