//99.序列中整数去重
let n = readline()
let str = readline().split(' ')
for(let i= n-1;i>=0;i--){
    if(str.slice(0,i).indexOf(str[i])>=0){
        str.splice(i,1)
    }
}  
console.log(str.join(' '))