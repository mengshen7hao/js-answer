let  n = readline();
let str = readline();
n = Number(n);
str = str.split(' ');
str.sort(function(a,b){return b-a});
let s = '';
for(let i=0;i<5;i++){
    s = s+ str[i]+' ';
}
console.log(s)