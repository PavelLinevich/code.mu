"use strict";

console.log('1-----------------------------------');
let arr = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
];

document.write(arr[3][2] + arr[1][1] + arr[2][0] + arr[0][0]);

console.log('2-----------------------------------');
let arr2 = [
    [1, 2],
    [3, 4],
    [5, 6],
];

console.log(arr2[0][0] + arr2[0][1] + arr2[1][0] + arr2[1][1] + arr2[2][0] + arr2[2][1]);

console.log('3-----------------------------------');
let arr3 = [
    [
        [1, 2],
        [3, 4],
    ],
    [
        [5, 6],
        [7, 8],
    ],
];

console.log(arr3[0][0][0] + arr3[0][0][1] + arr3[0][1][0] + arr3[0][1][1] + arr3[1][0][0] + arr3[1][0][1] + arr3[1][1][0] + arr3[1][1][1]);

console.log('4-----------------------------------');
let sum = 0;
let arr4 = [
    [
        1, 2, 3, [4, 5, [6, 7]]
    ],
    [
        8, [9, 10]
    ]
];

sum = arr4[0][0] +
    arr4[0][1] +
    arr4[0][2] +
    arr4[0][3][0] +
    arr4[0][3][1] +
    arr4[0][3][2][0] +
    arr4[0][3][2][1] +
    arr4[1][0] +
    arr4[1][1][0] +
    arr4[1][1][1];

console.log(sum);