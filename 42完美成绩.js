//42.完美成绩
while(line = readline()){
    let lines = line.split(' ');
    for(let i=0;i<lines.length;i++){
        if(Number(lines[i])>=90){
            console.log("Perfect")
        }
    }
}