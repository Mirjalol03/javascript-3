// let n = window.prompt("n ni kiriting");
// let x = window.prompt("x ni kiriting");
// let s =  0;
// for (let i = 0; i<=n; i++) {
//     s+= (x ** i)/2 + (--x ** i);
// }
// document.write(s);


// let n = window.prompt("n ni kiriting");
// let x = window.prompt("x ni kiriting");
// let s = 0;
// for (let i = 3; i<=n; i=i+2) {
//         s += (x ** i) / i;
//         j = s;
//         k = x + j; 
// }
// document.write(k);


let n = window.prompt("n ni kiriting");
let x = window.prompt("x ni kiriting");
let s = 0;
for (let i = 1; i <= n; i=i+1) {
    s += (x**i)/Math.sqrt(i);
}
document.write(s);