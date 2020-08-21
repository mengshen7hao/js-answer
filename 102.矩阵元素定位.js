//102.矩阵元素定位
let str = readline().split(' ')
let n = parseInt(str[0])
let m = parseInt(str[1])
let arr=[]
for(let i=0;i<n;i++){
    arr[i]=readline().split(' ')
}
let s = readline().split(' ')
let x = parseInt(s[0])
let y = parseInt(s[1])
console.log(arr[x-1][y-1])