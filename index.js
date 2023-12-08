// function maxTwoNumbers (arg1,arg2) {
//     let max;
//     if (arg1 > arg2) {
//         max = arg1;
//     }else{
//         max = arg2;
//     }
//     console.log(max);
// }
// maxTwoNumbers(3,7)
// maxTwoNumbers(35,47)
// maxTwoNumbers(36,87)
// maxTwoNumbers(383,87)
// maxTwoNumbers(33,427)
// maxTwoNumbers(44,47)
// maxTwoNumbers(13,7)


// function sum(arg1,arg2) {
//     return arg1 + arg2
// }

// console.log(sum(7,13));

// function res(arg1) {
//     return arg1 ** 3
// }
// console.log(res(10));


// function res(arg1,arg2) {
//     let sum =
//     return sum ** 2
// }
// console.log(res(2,2));


// regulr function
// function sum (a,b) {
//     return a + b
// }
// console.log(sum(1,3));

// // function expression
// const sum1 = function(a,b) {
//     return a + b
// }
// console.log(sum1(1,3));

// // arrow function
// const sum2 = (a,b) => {
//     return a + b
// }
// console.log(sum2(1,3));



// 1 - misol =====================================================

// regulr function

// let max = 0;
// function sum(a, b, c) {
//     if (a > b) {
//         max = a
//     }
//     else {
//         max = b
//     }
//     if (c > max) {
//         max = c
//     }
//     return max
// }
// console.log(sum(5, 8, 3));

// function expression

// let max = 0;
// const sum = function (a, b, c) {
//     if (a > b) {
//         max = a
//     }
//     else {
//         max = b
//     }
//     if (c > max) {
//         max = c
//     }
//     return max
// }
// console.log(sum(5, 8, 3));

// arrow function

// let max = 0;
// const sum = (a, b, c) => {
//     if (a > b) {
//         max = a
//     }
//     else {
//         max = b
//     }
//     if (c > max) {
//         max = c
//     }
//     return max
// }
// console.log(sum(5, 8, 3));

// 2 - misol =====================================================

// regulr function

// function sum(a,b) {
//     let res = 0;
//     for (let i = a; i <= b; i++) {
//         if (i % 2 == 0) {
//             res += i
//         }
//     }
//     return res
// }
// console.log(sum(1,9));

// // function expression

// const sum = function(a,b) {
//     let res = 0;
//     for (let i = a; i <= b; i++) {
//         if (i % 2 == 0) {
//             res += i
//         }
//     }
//     return res
// }
// console.log(sum(1,9));


// arrow function

// const sum = (a,b) => {
//     let res = 0;
//     for (let i = a; i <= b; i++) {
//         if (i % 2 == 0) {
//             res += i
//         }
//     }
//     return res
// }
// console.log(sum(1,9));

// 3 - misol =====================================================

// regulr function

// function sum(a) {
//     let res
//     let b = a % 10
//     let o = Math.floor(a / 10) % 10
//     let y = Math.floor(a / 100)
//     res = b + o + y

//     return res
// }
// console.log(sum(141));

// // function expression

// const sum = function(a) {
//     let res
//     let b = a % 10
//     let o = Math.floor(a / 10) % 10
//     let y = Math.floor(a / 100)
//     res = b + o + y

//     return res
// }
// console.log(sum(141));


// arrow function

// const sum = (a) => {
//     let res
//     let b = a % 10
//     let o = Math.floor(a / 10) % 10
//     let y = Math.floor(a / 100)
//     res = b + o + y

//     return res
// }
// console.log(sum(141));

// 4 - misol =====================================================

// regulr function

// function sum(a) {
//     let res = 0;
//     let b = a % 10
//     let o = Math.floor(a / 10) % 10
//     let y = Math.floor(a / 100)
    
//     if (b % 2 == 0) {
//         res += b
//     }
//     if (o % 2 == 0) {
//         res += o
//     }
//     if (y % 2 == 0) {
//         res += y
//     }

//     return res
// }
// console.log(sum(241));

// // function expression

// const sum = function(a) {
//     let res = 0;
//     let b = a % 10
//     let o = Math.floor(a / 10) % 10
//     let y = Math.floor(a / 100)
    
//     if (b % 2 == 0) {
//         res += b
//     }
//     if (o % 2 == 0) {
//         res += o
//     }
//     if (y % 2 == 0) {
//         res += y
//     }

//     return res
// }
// console.log(sum(241));

// arrow function

// const sum = (a) => {
//     let res = 0;
//     let b = a % 10
//     let o = Math.floor(a / 10) % 10
//     let y = Math.floor(a / 100)
    
//     if (b % 2 == 0) {
//         res += b
//     }
//     if (o % 2 == 0) {
//         res += o
//     }
//     if (y % 2 == 0) {
//         res += y
//     }

//     return res
// }
// console.log(sum(241));

// 5 - misol =====================================================

// regulr function

// function sum(a) {
//     let res = 1;
//     for (let i = 1; i <= a; i++){
//         if (i % 3 != 0 && i % 5 != 0) {
//             res *= i
//         }
//     }
//     return res
// }
// console.log(sum(18));

// // function expression

// const sum = function(a) {
//     let res = 1;
//     for (let i = 1; i <= a; i++){
//         if (i % 3 != 0 && i % 5 != 0) {
//             res *= i
//         }
//     }
//     return res
// }
// console.log(sum(18));

// arrow function

// const sum = (a) => {
//     let res = 1;
//     for (let i = 1; i <= a; i++){
//         if (i % 3 != 0 && i % 5 != 0) {
//             res *= i
//         }
//     }
//     return res
// }
// console.log(sum(18));

// 6 - misol =====================================================

// regulr function

// function sum(a) {
//     let res = 1;
//     for (let i = 1; i <= a; i++){
//         if (i % 7 == 0 != i % 5 == 0) {
//             res++
//         }
//     }
//     return res
// }
// console.log(sum(8));

// // function expression

// const sum = function(a) {
//     let res = 1;
//     for (let i = 1; i <= a; i++){
//         if (i % 7 == 0 != i % 5 == 0) {
//             res++
//         }
//     }
//     return res
// }
// console.log(sum(8));

// arrow function

// const sum = (a) => {
//     let res = 1;
//     for (let i = 1; i <= a; i++){
//         if (i % 7 == 0 != i % 5 == 0) {
//             res++
//         }
//     }
//     return res
// }
// console.log(sum(8));

// 7 - misol =====================================================

// regulr function

// function sum(n) {
//     let counter = 0;
//     for (let i = 1; i <= n ; i++) {
//         if (n % i == 0) {
//             counter += i
//         }
//     }
//     return counter
// }
// console.log(sum(10));

// // function expression

// const sum = function(n) {
//     let counter = 0;
//     for (let i = 1; i <= n ; i++) {
//         if (n % i == 0) {
//             counter += i
//         }
//     }
//     return counter
// }
// console.log(sum(10));

// arrow function

// const sum = (n) => {
//     let counter = 0;
//     for (let i = 1; i <= n ; i++) {
//         if (n % i == 0) {
//             counter += i
//         }
//     }
//     return counter
// }
// console.log(sum(10));