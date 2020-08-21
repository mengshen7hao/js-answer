//136.KiKi去重整数并排序
let n = readline();
let str = readline();
str = str.split(' ');
str.sort(function(a,b){return a-b});
for(let i=0;i<str.length-1;i++){
    if(str[i]==str[i+1]){
        str.splice(i,1);
        i = i-1;
    }
}
let arr =[];
for(let k=0;k<str.length;k++){
    if(str[k]>=1 && str[k]<=1000){
        arr.push(str[k]);
    }
}
console.log(arr.join(' '))