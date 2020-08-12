//43.及格分数
while(line=readline()){
    let lines = line.split(' ');
    for(let i =0;i<lines.length;i++){
        if(Number(lines[i])>=60){
            console.log("Pass")
        }else{
            console.log("Fail")
        }
    }
}