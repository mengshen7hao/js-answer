//74.HTTP状态码
while(line=readline()){
    let lines = line.split(/[\n]/);
    for(let i =0;i<lines.length;i++){
        let n = parseInt(lines[i]);
        if(n>=100&&n<=600){
            if(n==200){
                console.log('OK')
            }else if(n==202){
                console.log('Accepted')
            }else if(n==400){
                console.log('Bad Request')
            }else if(n==403){
                console.log('Forbidden')
            }else if(n==404){
                console.log('Not Found')
            }else if(n==500){
                console.log('Internal Server Error')
            }else if(n==502){
                console.log('Bad Gateway')
            }   
        }
    }