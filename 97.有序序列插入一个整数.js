//97.有序序列插入一个整数
let n = parseInt(readline())
let str = readline().split(' ')
let m = parseInt(readline())
let arr = []
if(m<Number(str[0])){
    arr.push(m)
    for(let i=0;i<str.length;i++){
        arr.push(Number(str[i]))
    }
    console.log(arr.join(' '))
}else if(m>Number(str[n-1])){
    for(let i=0;i<str.length;i++){
        arr.push(Number(str[i]))
    }
    arr.push(m)
    console.log(arr.join(' '))
}else{
    for(let i=0;i<n;i++){
        if(m>=Number(str[i])&&m<Number(str[i+1])){
            arr.push(Number(str[i]));
            arr.push(m);
        }else{
            arr.push(Number(str[i]));
        } 
    }
    console.log(arr.join(' '))
}