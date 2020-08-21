//104.最高身高
let str = readline().split(' ')
let n = parseInt(str[0])
let m = parseInt(str[1])
let arr=[]
let max =0
let pos=[]
for(let i=0;i<n;i++){
    arr[i]=readline().split(' ')
    for(let j=0;j<m;j++){
        if(max<arr[i][j]){
            max = arr[i][j]
            pos = [i+1,j+1]
        }
    }
}
console.log(pos.join(' '))