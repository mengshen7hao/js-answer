//87.统计成绩
let n = parseInt(readline()) 
let str = readline().split(' ')
let sum = 0;
let max = Number(str[0]);
let min = Number(str[0]);
for(let i=0;i<n;i++){
    let tmp = Number(str[i])
    sum += tmp
    if(max<tmp){
        max = tmp;
    }
    if(min>tmp){
        min = tmp;
    }
}
console.log(max.toFixed(2)+' '+min.toFixed(2)+' '+(sum/n).toFixed(2))