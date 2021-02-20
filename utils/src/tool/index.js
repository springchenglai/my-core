// 判断两个数是否相等
export const isEqual = (a, b, ignore) => {
  ignore = ignore || ['', null, undefined]
  if (ignore.includes(a) && ignore.includes(b)) {
    return true
  }
  if (Object.prototype.toString.call(a) != Object.prototype.toString.call(b)) {
    return false
  }
  if (Object.prototype.toString.call(a) == '[object Array]') {
    if (
      a.every((itema) => b.some((itemb) => isEqual(itema, itemb))) &&
      b.every((itemb) => a.some((itema) => isEqual(itema, itemb)))
    ) {
      return true
    }
    return false
  }
  if (Object.prototype.toString.call(a) == '[object Object]') {
    if (Object.keys(a).length != Object.keys(b).length) {
      return false
    }
    return Object.keys(a).every((key) => isEqual(a[key], b[key]))
  }
  return a === b
}