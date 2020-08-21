//117.小乐乐走台阶
let num = parseInt(readline())
if(num==1) {
   console.log(1)
}else if(num==2){
   console.log(2)
}else{
let f1=1,f2=2,f3;
for(let i=2;i<num;i++){
    f3 = f2+f1;
    f1=f2;
    f2=f3;
}
console.log(f2)
}
