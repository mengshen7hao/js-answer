//98.序列中删除指定数字
let n = readline()
let str = readline().split(' ')
let m = readline()
for(let i=0;i<n;i++){
    if(str[i]==m){
        str.splice(i,1)
        i = i-1
    }
}
console.log(str.join(' '))