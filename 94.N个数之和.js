//94.N个数之和
let n = parseInt(readline())
let str = readline().split(' ')
let sum =0
for(let i=0;i<str.length;i++){
    sum += Number(str[i])
}
console.log(sum)