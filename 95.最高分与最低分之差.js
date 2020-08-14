//95.最高分与最低分之差
let n = parseInt(readline())
let str = readline().split(' ')
let arr =[]
for(let i=0;i<str.length;i++){
    arr.push(Number(str[i]))
}
arr.sort(function(a,b){return b-a});
let max = arr[0]
let min = arr[arr.length-1]
console.log(max-min)