while(line=readline()){
    let lines = line.split(/[\n]/);
    for(let i =0;i<lines.length;i++){
        let r = lines[i].split(' ');
        let a = Number(r[0]);
        let b = Number(r[1]);
        if(a>b){
            console.log(a+">"+b)
        }else if(a==b){
            console.log(a+"="+b)
        }else{
            console.log(a+"<"+b)
        }
    }
}