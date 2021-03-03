'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// 判断两个数是否相等
const isEqual = (a, b, ignore) => {
  ignore = ignore || ['', null, undefined];
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
};

// 自定义对象的类型标签
const defineObjType = (obj, type) => {
  Object.defineProperty(obj, Symbol.toStringTag, {
    value: type
  });
};

// 二分搜索
const binarySearch = (list, key) => {
  const isNumber = list.every(item => {
    return typeof item === 'number'
  });
  if (!isNumber) {
    throw Error('the type of this array is not Number')
  }
  list = list.sort((a, b) => {
    return a - b
  });
  const len = list.length;
  let min = 0;
  let max = len - 1;
  let mid;
  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    if (key === list[mid]) {
      return mid
    } else if (key < list[mid]) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return -1
};
console.log('引入的入口文件是：commonjs')
exports.binarySearch = binarySearch;
exports.defineObjType = defineObjType;
exports.isEqual = isEqual;
