'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// 判断两个数是否相等
var isEqual = function isEqual(a, b, ignore) {
  ignore = ignore || ['', null, undefined];

  if (ignore.includes(a) && ignore.includes(b)) {
    return true;
  }

  if (Object.prototype.toString.call(a) != Object.prototype.toString.call(b)) {
    return false;
  }

  if (Object.prototype.toString.call(a) == '[object Array]') {
    if (a.every(function (itema) {
      return b.some(function (itemb) {
        return isEqual(itema, itemb);
      });
    }) && b.every(function (itemb) {
      return a.some(function (itema) {
        return isEqual(itema, itemb);
      });
    })) {
      return true;
    }

    return false;
  }

  if (Object.prototype.toString.call(a) == '[object Object]') {
    if (Object.keys(a).length != Object.keys(b).length) {
      return false;
    }

    return Object.keys(a).every(function (key) {
      return isEqual(a[key], b[key]);
    });
  }

  return a === b;
}; // 自定义对象的类型标签

var defineObjType = function defineObjType(obj, type) {
  Object.defineProperty(obj, Symbol.toStringTag, {
    value: type
  });
};

// 二分搜索
var binarySearch = function binarySearch(list, key) {
  var isNumber = list.every(function (item) {
    return typeof item === 'number';
  });

  if (!isNumber) {
    throw Error('the type of this array is not Number');
  }

  list = list.sort(function (a, b) {
    return a - b;
  });
  var len = list.length;
  var min = 0;
  var max = len - 1;
  var mid;

  while (min <= max) {
    mid = Math.floor((min + max) / 2);

    if (key === list[mid]) {
      return mid;
    } else if (key < list[mid]) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return -1;
};

exports.binarySearch = binarySearch;
exports.defineObjType = defineObjType;
exports.isEqual = isEqual;
