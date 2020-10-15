// 不适用于包含 function 的对象
function jsonCopy(obj) {
  return JSON.parse(JSON.stringify(obj))
}
