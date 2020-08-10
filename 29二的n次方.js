while(line=readline()){
    let lines = line.split(' ');
    for(let i =0;i<lines.length;i++){
        let num = Number(lines[i]);
        console.log(Math.pow(2,num))
    }
}