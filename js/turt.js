let n = window.prompt("n ni kiriting");
let x = window.prompt(" x ni kiriting");
let s = 0;
for(let i = 2; i <= n; i++) {
    s += ((x ** i)/i);
    l = x - s;
}
document.write(l);