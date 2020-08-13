//61.金字塔图案
while(line=readline()){
    let lines = line.split(/[\n]/);
    for(let i =0;i<lines.length;i++){
        let n = parseInt(lines[i]);
        if(n>=2&&n<=20){
            for(let i=1;i<=n;i++){
                let str = ''
                for(let j=1;j<=2*n;j++){
                    if(j<=n-i){
                        str += ' '
                    }else if(j>n-i&&j<n+i){
                        str += '* '
                        j++
                    }else{
                        str += ' '
                    }
                }
                console.log(str)
            }
        }
    }
}