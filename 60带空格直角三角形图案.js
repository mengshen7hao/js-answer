//60.带空格直角三角形图案
while(line=readline()){
    let lines = line.split(/[\n]/);
    for(let i =0;i<lines.length;i++){
        let n = parseInt(lines[i]);
        if(n>=2&&n<=20){
            for(let i=0;i<n;i++){
                let str = ''
                for(let j=0;j<n;j++){
                    if(j>=n-i-1){
                        str += '* '
                    }else{
                        str += '  '
                    }
                }
                console.log(str)
            }
        }
    }
}