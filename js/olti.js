let n = window.prompt("n ni kiriting");
let x = window.prompt(" x ni kiriting");
let s = 0;
let k;
for (let i = 2; i <= n; i = i + 2 ) {
    s += ((x ** i) / i);
    s = parseInt(s);
    k = 1 + s;  
}
document.write(k);