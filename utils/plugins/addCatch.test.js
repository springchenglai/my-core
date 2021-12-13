import plugin from './addCatch'
import { transform } from 'babel-core'

const example1 = 'new Promise((resolve, reject) => setTimeout(() => resolve(true), 300));'
const example2 = 'new Promise((resolve, reject) => setTimeout(() => resolve(true), 300)).then(res => console.log(res)).catch(err => console.log(err));'
const example3 = 'new Promise((resolve, reject) => setTimeout(() => resolve(true), 300)).then(res => console.log(res));'
const example4 = 'new Promise((resolve, reject) => setTimeout(() => resolve(true), 300)).then(res1 => console.log(res1)).then(res2 => console.log(res2));'
const example5 = 'new Promise((resolve, reject) => setTimeout(() => reject(true), 300)).then(res => console.log(res))'


it('works', () => {
  const { code: code1 } = transform(example1, {
    plugins: [
      plugin
    ]
  });
  const { code: code2 } = transform(example2, {
    plugins: [
      plugin
    ]
  });
  const { code: code3 } = transform(example3, {
    plugins: [
      plugin
    ]
  });
  const { code: code4 } = transform(example4, {
    plugins: [
      plugin
    ]
  });
   const { code: code5 } = transform(example5, {
    plugins: [
      plugin
    ]
  });
  
  expect(code1).toBe(example1);
  expect(code2).toBe(example2);
  expect(code3).toBe(example3);
  expect(code4).toBe(example4);
  expect(code5).toBe(example5 + '.catch(error => console.log(error));');
})