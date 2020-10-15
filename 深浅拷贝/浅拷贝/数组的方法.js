// 只适用于类数组对象
function arrayCopy(obj) {
  return Array.from(obj)
}

// 一下数组的方法也可以实现浅拷贝
// Array.concat()
// Array.slice()
