class Carousel {
  constructor(_width, _height, _num, _imgList) {
    this.width = _width
    this.height = _height
    this.num = _num
    this.imgList = _imgList
    this.init()
    // 初始化变量
    this.flag = true
    this.num = 0
  }
  init() {
    // 创建 view 盒子
    const that = this
    const box = this.createElement(document.body, 'div', {
      width: this.width + 'px',
      height: this.height + 'px',
      margin: '100px auto',
      position: 'relative'
    })
    // 创建 ul
    const ul = this.createElement(box, 'ul', {
      width: this.width + 'px',
      height: this.height + 'px',
      listStyle: 'none',
      // transform: 'rotate3d(1, 1, 0, -30deg)',
      transformStyle: 'preserve-3d'
    })
    // 根据 num 数量创建li
    for (let i = 0; i < this.num; i++) {
      const li = this.createLi(i)
      ul.appendChild(li)
    }
    // 创建左右按钮
    const pre = this.createElement(box, 'div', {
      width: '60px',
      height: '60px',
      lineHeight: '60px',
      textAlign: 'center',
      display: 'block',
      position: 'absolute',
      top: '50%',
      left: 0,
      textDecoration: 'none',
      fontSize: '40px',
      transform: 'translate3d(0, -50%, 0)',
      color: '#fff',
      cursor: 'pointer',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      opacity: 0,
      zIndex: 10,
      transition: 'opacity 1s'
    })
    pre.textContent = '<'
    const next = this.createElement(box, 'div', {
      width: '60px',
      height: '60px',
      lineHeight: '60px',
      textAlign: 'center',
      display: 'block',
      position: 'absolute',
      top: '50%',
      right: 0,
      textDecoration: 'none',
      fontSize: '40px',
      transform: 'translate3d(0, -50%, 0)',
      color: '#fff',
      cursor: 'pointer',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      opacity: 0,
      zIndex: 10,
      transition: 'opacity 1s'
    })
    pre.className = 'pre'
    next.className = 'next'
    next.textContent = '>'
    // 给盒子添加鼠标事件
    box.addEventListener('mouseenter', (e) => {
      pre.style.opacity = next.style.opacity = 1
    })
    box.addEventListener('mouseleave', (e) => {
      pre.style.opacity = next.style.opacity = 0
    })
    pre.addEventListener('click', () => {
      this.clickHandler(event, that)
    })
    next.addEventListener('click', () => {
      this.clickHandler(event, that)
    })
  }
  clickHandler(e, that) {
    if (this.flag === false) return
    this.flag = false
    if (e.target.className === "pre") {
      this.num++
    } else this.num--;
    this.transform()
  }
  transform() {
    let lis = document.getElementsByTagName("li")
    Array.from(lis).forEach((el, index) => {
      el.style.transform = 'rotateX(' + this.num * 90 + 'deg)',
        el.style.transitionDelay = index * 0.2 + 's'
    });
    setTimeout(() => {
      this.flag = true
    }, 1500);
    Array.from(lis).forEach((el, index) => {
      console.log(el.children[0]);
    });
  }
  // setInterval(() => {
  //   if (this.flag === false) return
  //   this.flag = false
  //   num--
  //   transform()

  // }, 3000);
  createElement(parent, el, style) {
    el = document.createElement(el)
    Object.assign(el.style, style)
    parent.appendChild(el)
    return el
  }
  createLi(i) {
    const li = document.createElement('li')
    let num = Math.round(this.width / this.num)
    Object.assign(li.style, {
      width: num + 'px',
      height: this.height + 'px',
      backgroundColor: '#ccc',
      float: 'left',
      position: 'relative',
      transformStyle: 'preserve-3d',
      transition: 'transform .5s linear',
    })

    const spanFront = this.createElement(li, 'span', {
      width: num + 'px',
      height: this.height + 'px',
      backgroundColor: '#888',
      position: 'absolute',
      top: 0,
      left: 0,
      transformStyle: 'preserve-3d',
      transition: 'transform .5s linear',
      transform: 'translateZ(150px)',
      background: 'url(' + this.imgList[0] + ')',
      backgroundSize: this.width + 'px ' + this.height + 'px',
      backgroundPosition: -(num) * i + 'px 0'
    })
    const spanDown = this.createElement(li, 'span', {
      width: num + 'px',
      height: this.height + 'px',
      backgroundColor: '#ccc',
      position: 'absolute',
      top: 0,
      left: 0,
      transformStyle: 'preserve-3d',
      transition: 'transform .5s linear',
      transform: 'translateY(150px) rotateX(-90deg)',
      background: 'url(' + this.imgList[1] + ')',
      backgroundSize: this.width + 'px ' + this.height + 'px',
      backgroundPosition: -(num) * i + 'px 0'
    })
    const spanBack = this.createElement(li, 'span', {
      width: num + 'px',
      height: this.height + 'px',
      backgroundColor: '#ccc',
      position: 'absolute',
      top: 0,
      left: 0,
      transformStyle: 'preserve-3d',
      transition: 'transform .5s linear',
      transform: 'translateZ(-150px) rotateX(180deg)',
      background: 'url(' + this.imgList[2] + ')',
      backgroundSize: this.width + 'px ' + this.height + 'px',
      backgroundPosition: -(num) * i + 'px 0'
    })
    const spanUp = this.createElement(li, 'span', {
      width: num + 'px',
      height: this.height + 'px',
      backgroundColor: '#663',
      position: 'absolute',
      top: 0,
      left: 0,
      transformStyle: 'preserve-3d',
      transition: 'transform .5s linear',
      transform: 'translateY(-150px) rotateX(90deg)',
      background: 'url(' + this.imgList[this.imgList.length - 1] + ')',
      backgroundSize: this.width + 'px ' + this.height + 'px',
      backgroundPosition: -(num) * i + 'px 0'
    })
    return li
  }
}
