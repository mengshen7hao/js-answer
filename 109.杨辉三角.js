//109.杨辉三角
let n = parseInt(readline())
let arr = [];
let str = ''
for(let i=0;i<n;i++){
    arr[i] = [];
    for(let j=0;j<=i;j++){
        if(j==0||j==i){
            arr[i][j]=1;
        }else{
            arr[i][j] = arr[i-1][j] + arr[i-1][j-1]
        }
        let num = arr[i][j];
        let count = 0;
        while(num){
            num = Math.floor(num/10);
            count++;
        }
        if(count==1){
            str += "    " +arr[i][j]
        }else if(count==2){
            str += "   " +arr[i][j]
        }else if(count==3){
            str += "  "+arr[i][j]
        }else if(count==4){
            str += " "+arr[i][j]
        }else{
            str = arr[i][j]
        }
    }
    str += '\n'
}
console.log(str)