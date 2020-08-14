//90.矩阵计算
let nums = readline().split(' ')
let m = parseInt(nums[0]) 
let n = parseInt(nums[1])
let sum =0
for(let i=0;i<m;i++){
    let line = readline().split(' ')
    for(let j=0;j<line.length;j++){
        if(Number(line[j])>0){
            sum +=Number(line[j])
        }
    }
}
console.log(sum)