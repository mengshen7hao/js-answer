//119.小乐乐与字符串
let str = readline().split('');
let c = 0, h = 0, n = 0;
for(let i=0;i<str.length;i++){
    if(str[i]=='C'){
        c = c+1;
    }else if(str[i]=='H'){
        h +=c;
    }else if(str[i]=='N'){
        n +=h;
    }
}
console.log(n)