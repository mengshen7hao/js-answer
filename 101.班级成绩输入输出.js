//101.班级成绩输入输出
for(let i=0;i<5;i++){
    let arr = readline().split(' ')
    let sum = 0;
    let str = '';
    for(let j=0;j<5;j++){
        sum += Number(arr[j])
        str += Number(arr[j]).toFixed(1)+ ' '
    }
    console.log(str + sum.toFixed(1))
}