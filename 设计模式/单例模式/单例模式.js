/* 
单例模式：在内存中只会创建且创建唯一的对象的设计模式
    类型：   1.懒汉式：真正需要的时候才会创建该单例对象
            2.饥汉式：在类加载的时候就创建好了该单例对象，等待被使用

*/
// 类型一：懒汉式
// const Person = (function () {
//   function Person() {
//     this.name = "jack"
//   }
//   let instance = null
//   return function () {
//     if (!instance) instance = new Person()
//     return instance
//   }
// })()
// const p1 = new Person()
// const p2 = new Person()
// console.log(p1, p2);
// console.log(p1 === p2);

// // // 类型二：饥汉式
// // const P = function () {
// //   let instance = null;
// //   function Person1() {
// //     this.name = 'jason'
// //   }
// //   return function () {
// //     if (!instance) {
// //       instance = new Person1()
// //     }
// //     return instance
// //   }
// // }
// // let p3 = P()()
// // let p4 = P()()
// // console.log(p3, p4);
// // console.log(p3 === p4);

// // ES6 单例模式
// class Apple {
//   constructor(name, creator, products) {
//     if (!Apple.instance) {
//       this.name = name
//       this.creator = creator
//       this.products = products
//       Apple.instance = this
//     }
//     return Apple.instance
//   }
// }
// let apple = new Apple("苹果公司", "乔布斯", ["iPhone", "iMac", "iPad", "iPod"])
// let copyApple = new Apple("苹果公司", "张麟", ["iPhone", "iMac", "iPad", "iPod"])
// console.log(apple, copyApple);
// console.log(apple === copyApple);
// ES6 单例模式 -- 使用 static 静态方法优化代码
// class Apple {
//   constructor(name, creator, products) {
//     this.name = name;
//     this.creator = creator;
//     this.products = products
//   }
//   static getInstance(name, creator, products) {
//     if (!this.instance) {
//       this.instance = new Apple(name, creator, products)
//     }
//     return this.instance
//   }
// }
// let apple = Apple.getInstance("苹果公司", "乔布斯", ["iPhone", "iMac", "iPad", "iPod"])
// let copyApple = Apple.getInstance("苹果公司", "张麟", ["iPhone", "iMac", "iPad", "iPod"])
// console.log(apple, copyApple);
// console.log(apple === copyApple);

class Person {
  constructor(name) {
    if (!Person.instance) {
      this.name = name
      Person.instance = this
    }
    return Person.instance
  }
}
const p1 = new Person("jack")
const p2 = new Person("Anson")
console.log(p1, p2);
console.log(p1 === p2);
