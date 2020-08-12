//40.社长竞选
let str = readline();
let s = str.split('');
let a = 0;
let b = 0;
for(let i = 0;i< s.length -1;i++){
    if(s[i]=='A'){
        a++;
    }else if(s[i]=='B'){
        b++;
    }
}
if(a>b){
    console.log('A');
}else if(a<b){
    console.log('B');
}else{
    console.log('E');
}