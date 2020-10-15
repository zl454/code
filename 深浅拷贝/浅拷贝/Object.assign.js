// 多层是浅拷贝，一层是深拷贝
function assignCopy(obj) {
  return Object.assign({}, obj)
}
