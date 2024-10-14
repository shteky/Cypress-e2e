// const fibonacci = (10, memory) => {
//     memory = memory || {};
//     if (memory[n]) return memory[n];
//     if (n <= 1) return 1;
  
//     return memory[n] = fibonacci(n - 1, memory) + fibonacci(n - 2, memory);
// }
// console.log(fibonacci)


let height = 6;
for (let i = 0; i < height; i++) {
    let row = '';
    for (let j = 0; j < height - i - 1; j++) {
        row += ' ';
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        row += '*';
    }
    console.log(row);
}

// Draw the trunk
let trunk = '';
for (let i = 0; i < height - 1; i++) {
    trunk += ' ';
}
trunk += '|';
console.log(trunk);
