let n = parseInt(readline())
let arr=[]
let flag=1
for(let i=0;i<n;i++){
    arr[i]=[]
    arr[i]=readline().split(' ')
}
for(let i=1;i<n;i++){
    for(let j=0;j<i;j++){
        if(arr[i][j]!=0){
            flag= 0;
        }
    }
}
if(flag){
    console.log('YES')
}else{
    console.log('NO')
}