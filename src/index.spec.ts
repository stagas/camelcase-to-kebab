import { camelCaseToKebab } from './'

it('should convert a kebab-case string to camelCase', () => {
  expect(camelCaseToKebab('')).toEqual('')
  expect(camelCaseToKebab('hello')).toEqual('hello')
  expect(camelCaseToKebab('helloWorld')).toEqual('hello-world')
  expect(camelCaseToKebab('helloCamelWorld')).toEqual('hello-camel-world')
  expect(camelCaseToKebab('edgeC')).toEqual('edge-c')
})
