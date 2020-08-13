//77.有序序列插入一个数
let n = parseInt(readline())
let str = readline().split(' ')
let m = parseInt(readline())
if(m<Number(str[0])){
    str.unshift(m)
    console.log(str.join(' '))
}else if(m>Number(str[str.length-1])){
    str.push(m)
    console.log(str.join(' '))
}else{
    for(var i=0;i<str.length-1;i++){
        if(m>=Number(str[i])&&m<Number(str[i+1])){
            let b= str.splice(i+1,0,m);
            break;
        }
    }
    console.log(str.join(' '))
}