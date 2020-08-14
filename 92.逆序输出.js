//92.逆序输出
let str = readline().split(' ')
let arr = []
for(let i=0;i<str.length;i++){
    arr.push(Number(str[i]))
}
arr.reverse()
console.log(arr.join(' '))