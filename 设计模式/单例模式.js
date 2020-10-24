/* 
单例模式：在内存中只会创建且创建一的对象的设计模式
    类型：   1.懒汉式：真正需要的时候才会创建该单例对象
            2.饥汉式：在类加载的时候就创建好了该单例对象，等待被使用

*/
// 类型一：懒汉式
const Person = (function () {
  function Person() {
    this.name = "jack"
  }
  let instance = null
  return function () {
    if (!instance) instance = new Person()
    return instance
  }
})()
const p1 = new Person()
const p2 = new Person()
console.log(p1, p2);
console.log(p1 === p2);

// 类型二：饥汉式
const P = function () {
  let instance = null;
  function Person1() {
    this.name = 'jason'
  }
  return function () {
    if (!instance) {
      instance = new Person1()
    }
    return instance
  }
}
let p3 = P()()
let p4 = P()()
console.log(p3, p4);
console.log(p3 === p4);
