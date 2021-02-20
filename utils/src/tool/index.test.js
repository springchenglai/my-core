import { isEqual } from './index'

test('传入两个空字符串，返回true', () => {
  expect(isEqual({}, {})).toBe(true)
})

test('传入null和空字符串，返回true', () => {
  expect(isEqual(null, '')).toBe(true)
})

test('传入类型不同的两个值，返回false', () => {
  expect(isEqual(1, '1')).toBe(false)
})

test('传入两个键值对不等的对象，返回false', () => {
  expect(isEqual({a: 1}, {a: 1, b: 2})).toBe(false)
})

test('传入两个深层嵌套对象，返回true', () => {
  expect(
    isEqual(
      {
        name: 'lvzi',
        friends: ['小玲', '萌萌']
      },
      {
        name: 'lvzi',
        friends: ['小玲', '萌萌']
      }
    )
  ).toBe(true)
})
test('传入两个数组，返回true', () => {
  expect(
    isEqual([100, 'b', {name: 'value'}], [{name: 'value'}, 100, 'b'])
  ).toBe(true)
})