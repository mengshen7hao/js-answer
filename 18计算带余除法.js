let str = readline();
let s = str.split(' ');
let s1 = Number(s[0]);
let s2 = Number(s[1]);
let r1 = Math.floor(s1/s2);
let r2 = s1 -r1*s2;
let list = r1 + ' '+r2;
console.log(list)