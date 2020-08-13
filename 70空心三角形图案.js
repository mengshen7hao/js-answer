//70.空心三角形图案
while(line=readline()){
    let lines = line.split(/[\n]/);
    for(let i =0;i<lines.length;i++){
        let n = parseInt(lines[i]);
        if(n>=3&&n<=20){
            for(let i=0;i<n;i++){
                let str = ''
                for(let j=0;j<n;j++){
                    if(j==0||i==j||i==n-1){
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