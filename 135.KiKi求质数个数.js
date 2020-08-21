//135.KiKi求质数个数
let num=0;
for (let i=100;i<=999;i++){
    for (let j=2;j< Math.floor(i**0.5)+1;j++){
        if(i%j==0){
            num++;
            break;
        }
    }
}
console.log(900-num);