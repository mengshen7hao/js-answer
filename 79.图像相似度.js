let str = readline().split(' ')
let m = parseInt(str[0])
let n = parseInt(str[1])
let arr1 = []
let arr2 = []
//79.图像相似度
let count = 0;
for(let i=0;i<m;i++){
    let q = readline().split(' ')
    arr1[i] = []
    for(let j=0;j<n;j++){
        arr1[i].push(parseInt(q[j]))
    }
}
for(let i=0;i<m;i++){
    let q = readline().split(' ')
    arr2[i] = []
    for(let j=0;j<n;j++){
        arr2[i].push(parseInt(q[j]))
    }
}
for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
        if(arr1[i][j]==arr2[i][j]){
            count++;
        }
    }
}
let res = (count*100/(m*n)).toFixed(2)
console.log(res)