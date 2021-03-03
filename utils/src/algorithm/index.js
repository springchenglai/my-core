// 二分搜索
export const binarySearch = (list, key) => {
  const isNumber = list.every(item => {
    return typeof item === 'number'
  })
  if (!isNumber) {
    throw Error('the type of this array is not Number')
  }
  list = list.sort((a, b) => {
    return a - b
  })
  const len = list.length
  let min = 0
  let max = len - 1
  let mid
  while (min <= max) {
    mid = Math.floor((min + max) / 2)
    if (key === list[mid]) {
      return mid
    } else if (key < list[mid]) {
      max = mid - 1
    } else {
      min = mid + 1
    }
  }
  return -1
}