import plugin from './index'
import { transform } from 'babel-core'

const example1 = 'const a = 1;const b = 2;console.log(a == b);'
const example2 = 'const a = 1;const b = 2;console.log(a + b);'
const example3 = 'Object.prototype.toString.call([]) == "[object Array]"'

it('works', () => {
  const { code } = transform(example3, {
    plugins: [
      [
        plugin,
        {
          option1: true
        }
      ]
    ]
  });
  expect(code).toBe('Object.prototype.toString.call([]) === "[object Array]";');
})