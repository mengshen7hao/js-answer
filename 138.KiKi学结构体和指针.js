//138.KiKi学结构体和指针
let n = readline();
let str = readline();
let r = readline();
str = str.split(' ');
let arr=[];
let count = 0;
for(let i =0;i<n;i++){
    if(r==str[i]){
        count++;
    }else{
        arr.push(str[i]);
    }
}
console.log(n-count)
console.log(arr.join(' '))