function shallowCopy(obj) {
  var src = {}
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      src[prop] = obj[prop]
    }
  }
  return src
}
