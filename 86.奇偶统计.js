//86.奇偶统计
let n = parseInt(readline())
let p=0, q=0
for(let i=1;i<=n;i++){
    if(i%2!=0){
        p++
    }else{
        q++
    }
}
console.log(p+' '+q)