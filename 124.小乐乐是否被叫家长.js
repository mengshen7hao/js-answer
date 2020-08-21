//124.小乐乐是否被叫家长
let str = readline().split(' ');
let sum =0;
for(let i=0;i<3;i++){
    sum += Number(str[i]);
}
if(sum<180){
    console.log('YES') 
}else{
    console.log('NO') 
}