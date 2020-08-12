while(line = readline()){
    let lines = line.split(' ');
    for(let i =0;i<lines.length;i++){
        let reg = /[a-z,A-Z]/g;
        if(lines[i].match(reg)){
            console.log('YES')
        }else{
            console.log('NO')
        }
    }
}