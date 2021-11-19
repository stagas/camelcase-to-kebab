/**
 * Converts a string from `camelCase` to `kebab-case`.
 *
 * @param input The string in `camelCase` to be converted
 * @returns The string in `kebab-case`
 */
export function camelCaseToKebab(input: string) {
  let output = ''
  for (let i = 0, char = ''; i < input.length; i++) {
    char = input.charAt(i)
    if (char >= 'A' && char <= 'Z') {
      output += '-' + char.toLowerCase()
    } else {
      output += char
    }
  }
  return output
}

export default camelCaseToKebab
