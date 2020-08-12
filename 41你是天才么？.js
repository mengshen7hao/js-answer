//41你是天才么？
while(line=readline()){
    let lines = line.split(' ');
    for(let i =0;i<lines.length;i++){
        if(Number(lines[i])>=140){
            console.log("Genius")
        }
    }
}