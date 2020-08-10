let str = readline();
let s = str.split(',');
let s1 = s[0].split('=');
let s2 = s[1].split('=');
[s1[1],s2[1]]=[s2[1],s1[1]];
s1 =[s1[0],s1[1]].join('=');
s2 =[s2[0],s2[1]].join('=');
let r = [s1,s2].join(',');
console.log(r)