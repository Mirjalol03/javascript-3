// let n = window.prompt("n ni kiriting");
// let x = window.prompt(" x ni kiriting");
// let s = 0;
// for (let i = 0; i <= n; i++) {
//     s = s + Math.sqrt(i)/x ** i;
// } 
// document.write(s);


let n = window.prompt("n ni kiriting");
let x = window.prompt(" x ni kiriting");
let s = 0;
for (let i = 1; i <= n; i++) {
    s += (x) + (x**i)    / i;
}
document.write(s);