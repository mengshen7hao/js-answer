//76.公务员面试
let str = readline().split(' ')
let arr = []
let sum = 0;
for(let i=0;i<7;i++){
    arr.push(Number(str[i]));
    sum += Number(str[i]);
}
arr.sort(function(a,b){return a-b});
sum = sum - arr[0] -arr[6];
let ave = (sum/5).toFixed(2);
console.log(ave)