let str = readline();
let s = str.split(" ");
let a = Number(s[0]);
let b = Number(s[1]);
let c = Number(s[2]);
let l = a+b+c;
let sa = Math.sqrt((l/2)*(l/2-a)*(l/2-b)*(l/2-c));
let st = 'circumference='+l.toFixed(2)+' ' +'area='+ sa.toFixed(2);
console.log(st)