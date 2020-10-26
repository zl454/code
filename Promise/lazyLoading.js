let n = 0
const p = new Promise((res, rej) => {
  n++
  if (n < 10) res(n)
})
function res(n) {
  console.log(n);
}
function rej() {

}
p.then(res(n)).then(res(n)).then(res(n)).then(res(n)).then(res(n)).then(res(n)).then(res(n)).then(res(n)).then(res(n))
