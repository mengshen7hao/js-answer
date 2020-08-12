let sum1,sum2,sum3,sum4;
let str = '';
for (let i=10000;i<100000;i++){
    sum1 = parseInt(i/10000) * (i % 10000);
    sum2 = parseInt(i/1000) * (i % 1000);
    sum3 = parseInt(i/100) * (i % 100);
    sum4 = parseInt(i/10) * (i % 10);
    if (i==sum1+sum2+sum3+sum4){
          str += i+' ';
    }
}
console.log(str)