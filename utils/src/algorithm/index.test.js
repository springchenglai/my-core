import { binarySearch } from './index'

// test('传入一个字符串数组，直接报错', () => {
//   expect(binarySearch(['a', 'b'], 'c')).toBe(false)
// })

test('传入一个奇数个元素的数组', () => {
  expect(binarySearch([1,2,3], 3)).toBe(2)
})

test('传入一个偶数个元素的数组', () => {
  expect(binarySearch([2, 4, 5, 10, 6, 9], 4)).toBe(1)
})
test('传入一个两个元素的数组', () => {
  expect(binarySearch([100, 4], 4)).toBe(0)
})