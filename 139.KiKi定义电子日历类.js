//139.KiKi定义电子日历类
let date = readline();
date = date.split(' ');
let str;
let year = date[0];
let month = date[1];
let day = date[2];
str = day +'/'+month+'/'+year;
console.log(str)