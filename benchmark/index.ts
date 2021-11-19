import assert from 'assert'
import { suite, add, cycle, complete, configure } from 'benny'
import { asciiChartReporter } from 'benny-ascii-chart-reporter'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { default as camel2Kebab } from 'camel2kebab'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { default as camelToKebab } from 'camel-to-kebab'
import { paramCase as changeCase } from 'change-case'
import { kebabCase as caseAnything } from 'case-anything'
import { camelCaseToKebab } from '../src'

function regExpReplace(s: string) {
  return s.replace(/[A-Z]/g, s => '-' + s.toLowerCase())
}

function forLoopCharAtLowerCase(input: string) {
  let output = ''
  for (let i = 0, char = ''; i < input.length; i++) {
    char = input.charAt(i)
    if (char === char.toLowerCase()) {
      output += char
    } else {
      output += '-' + char.toLowerCase()
    }
  }
  return output
}

{
  const kebab = 'hello-world-test-validity'
  const camel = 'helloWorldTestValidity'

  assert.equal(camel2Kebab(camel), kebab)
  assert.equal(camelToKebab(camel), kebab)
  assert.equal(changeCase(camel), kebab)
  assert.equal(caseAnything(camel), kebab)
  assert.equal(regExpReplace(camel), kebab)
  assert.equal(forLoopCharAtLowerCase(camel), kebab)
  assert.equal(camelCaseToKebab(camel), kebab)
}

///////////////////////////////////////////////////////////////////////////////

// const string = 'hello-world'
const string = 'helloWorldMediumSize'
// const string = 'hello-world-one-two-three-four-five-six-seven-eight-nine-ten'

suite(
  'kebab-case to camel-case',

  configure({
    cases: {
      minSamples: 5,
      maxTime: parseFloat(process.argv[2]) || 5,
    },
  }),

  add('camel-to-kebab', () => camelToKebab(string)),
  add('camel2kebab', () => camel2Kebab(string)),
  add('change-case', () => changeCase(string)),
  add('case-anything', () => caseAnything(string)),
  add('regexp replace', () => regExpReplace(string)),
  add('for-loop charAt toLowerCase', () => forLoopCharAtLowerCase(string)),
  add('camelcase-to-kebab', () => camelCaseToKebab(string)),

  cycle(),
  complete(asciiChartReporter()),
  complete(),
)
