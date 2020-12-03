let n = window.prompt("n ni kiriting");
let x = window.prompt(" x ni kiriting");

let s = 0;

for (let i = 0; i <= n; i++) {
    s += i / (x ** (2*i));
}
document.write(s);