//66.反斜线形图案
while(line=readline()){
    let lines = line.split(/[\n]/);
    for(let i =0;i<lines.length;i++){
        let n = parseInt(lines[i]);
        if(n>=2&&n<=20){
            for(let i=1;i<=n;i++){
                let str = ''
                for(let j=1;j<=n;j++){
                    if(j==i){
                        str += '*'
                    }else{
                        str += ' '
                    }
                }
                console.log(str)
            }
        }
    }
}