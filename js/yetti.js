let n = window.prompt("n ni kiriting");
let x = window.prompt(" x ni kiriting");
x = parseInt(x);
let s = 0;for (let i = 1; i <= n; i = i + 2) {
    s+= x + ((x ** i)/i);
}
document.write(s);