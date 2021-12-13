import plugin from './transformImportPath'
import { transform } from 'babel-core'

const example1 = 'import plugin from "plugin";'
const example2 = 'require("plugin");'
const example3 = 'handle("a/b");'

it('works', () => {
  const { code: code1 } = transform(example1, {
    plugins: [
      [
        plugin,
        {
          from: 'plugin',
          to: 'utils/plugin/index.js'
        }
      ]
    ]
  });
  const { code: code2 } = transform(example2, {
    plugins: [
      [
        plugin,
        {
          from: 'plugin',
          to: 'utils/plugin/index.js'
        }
      ]
    ]
  });
  const { code: code3 } = transform(example3, {
    plugins: [
      [
        plugin,
        {
          from: 'a/b',
          to: 'a/b/index.js'
        }
      ]
    ]
  });
  // console.log('code1:', code1)
  expect(code1).toBe('import plugin from "utils/plugin/index.js";');
  expect(code2).toBe('require("utils/plugin/index.js");');
  expect(code3).toBe(example3);
})