//85.包含数字9的数
let count = 0;
for(let i=0;i<2020;i++){
    let s =(''+i).split('')
    if(s.indexOf('9')!=-1){
        count++
    }
}
console.log(count)