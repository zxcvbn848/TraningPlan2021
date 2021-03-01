// 計算 1 + 2 + ... + 50 的總和
let sum = 0;
for (let n = 1; n <= 50; n++) {
    sum += n;
}
console.log(sum);

// 印出 99 乘法表
for (let x = 1; x <= 9; x++) {
    for (let y = 1; y <= 9; y++) {
        product = x * y;
        console.log(`${x} x ${y} = ${product}`);
    }
}