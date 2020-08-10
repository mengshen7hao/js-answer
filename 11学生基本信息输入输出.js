let str1 = readline();
let str = str1.split(';');
let w1 = str[0];
let s = str[1].split(',');
let s1 = Math.round(s[0]*100)/100;
let s2 = Math.round(s[1]*100)/100;
let s3 = Math.round(s[2]*100)/100;
let res = 'The each subject score of  No. ' +w1+ ' is ' + s1.toFixed(2)+', '+s2.toFixed(2)+', '+s3.toFixed(2)+'.'
console.log(res)