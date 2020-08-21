//130.小乐乐查找数字
let n = readline();
let str = readline();
let num = readline();
let count =0;
str = str.split(' ');
for(let i=0;i<n;i++){
    if(str[i]==num){
        count++;
    }
}
console.log(count)