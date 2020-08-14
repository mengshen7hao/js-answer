//100.有序序列合并
let str = readline().split(' ')
let m = Number(str[0])
let n = Number(str[1])
let arr1 = readline().split(' ')
let arr2 = readline().split(' ')
let arr = []
for(let i=0;i<m;i++){
    arr.push(arr1[i])
}
for(let j=0;j<n;j++){
    arr.push(arr2[j])
}
arr.sort(function(a,b){return a-b});
console.log(arr.join(' '))