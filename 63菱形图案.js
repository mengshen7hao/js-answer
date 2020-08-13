//63.菱形图案
while(line=readline()){
    let lines = line.split(/[\n]/);
    for(let i =0;i<lines.length;i++){
        let n = parseInt(lines[i]);
        if(n>=2&&n<=20){
            for(let i=1;i<=2*n+1;i++){
                let str = ''
                for(let j=1;j<=2*n+2;j++){
                    if(i<=n+1){
                        if(j<=n+1-i){
                        str += ' '
                        }else if(j>n+1-i&&j<n+i+1){
                            str += '* '
                            j++
                        }else{
                            str += ' '
                        }
                    }else{
                        if(j<=i-n-1){
                            str += ' '
                        }else if(j>i-n-1&&j<3*n+3-i){
                            str += '* '
                            j++
                        }else{
                            str += ' '
                        }
                    }
                }
                console.log(str)
            }
        }
    }
}