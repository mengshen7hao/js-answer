//65.箭形图案
while(line=readline()){
    let lines = line.split(/[\n]/);
    for(let i =0;i<lines.length;i++){
        let n = parseInt(lines[i]);
        if(n>=2&&n<=20){
            for(let i=1;i<=2*n+1;i++){
                let str = ''
                for(let j=1;j<=2*n+2;j++){
                    if(i<=n+1){
                        if(j<=2*n-2*i+2){
                            str += ' '
                        }else if(j>2*n-2*i+2&&j<=2*n-i+2){
                            str += '*'
                        }else{
                            str += ' '
                        }
                    }else{
                        if(j<=2*(i-n-1)){
                            str += ' '
                        }else if(j>2*(i-n-1)&&j<=i){
                            str += '*'
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