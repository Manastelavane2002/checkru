/**
 * @param {string}
 * @returns {string}
 * @description Capitalizes first letter
 * @example const newWord = capitalizeFirstLetter('apple');
 */
export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
