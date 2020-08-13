//62.翻转金字塔图案
while(line=readline()){
    let lines = line.split(/[\n]/);
    for(let i =0;i<lines.length;i++){
        let n = parseInt(lines[i]);
        if(n>=2&&n<=20){
            for(let i=1;i<=n;i++){
                let str = ''
                for(let j=1;j<=2*n;j++){
                    if(j<i){
                        str += ' '
                    }else if(j>=i&&j<=2*n-i){
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