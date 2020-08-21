//137.KiKi判断上三角矩阵
while(line = readline()){
    let n = parseInt(line);
    let res =""
    for(let i=0;i<n;i++){
        let line = readline();
        if(line.includes("0 ".repeat(i))){
            res+="YES"
        }else{
            res+="NO"
        }
    }
    if(res.includes("NO")){
        console.log("NO");
    }else{
         console.log("YES");
    }
}