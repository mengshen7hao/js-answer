//128.小乐乐计算求和
let n = readline();
function jiecheng(num){
    let sum =1;
    for(let i=1;i<=num;i++){
        sum *=i;
    }
    return sum;
}
let total = 0;
for(let i=1;i<=n;i++){
    total += jiecheng(i);
}
console.log(total)