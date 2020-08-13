while(line=readline()){
    let lines = line.split(/[\n]/);
    for(let i =0;i<lines.length;i++){
        let n = parseInt(lines[i]);
        if(n>=3&&n<=20){
            for(let i=1;i<=n;i++){
                let str = ''
                for(let j=1;j<=i;j++){
                    if(j<i){
                        str += j+' '
                    }else{
                        str += j
                    }
                }
                console.log(str)
            }
        }
    }
}