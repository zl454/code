// 创建观察者
class Observer {
  constructor(name, fn) {
    this.name = name
    this.fn = fn
  }
}
const bzr = new Observer("bzr", (state) => { console.log("因为：" + state + "，叫爸爸！"); })
const xz = new Observer("xz", (state) => { console.log("因为：" + state + "，骂班主任！"); })
const njzr = new Observer("njzr", (state) => { console.log("因为：" + state + "，哪个班的？"); })
// 创建被观察者
class Subject {
  constructor(state) {
    this.state = state
    this.observers = []
  }
  setState(val) {
    this.state = val
    this.observers.forEach(item => item.fn(this.state))
  }
  addObserver(obs) {
    if (obs.constructor !== Observer) return console.log("没有该观察者");
    this.observers = this.observers.filter(item => item !== obs)
    this.observers.push(obs)
  }
  delObserver(obs) {
    this.observers = this.observers.filter(item => item !== obs)
  }
}
const xiaoming = new Subject("学习")
xiaoming.addObserver(bzr)
xiaoming.addObserver(xz)
xiaoming.addObserver(njzr)
console.log(xiaoming);
