//53.计算一元二次方程
while(line=readline()){
while(line=readline()){
    let lines = line.split(/[\n]/);
    for(let i =0;i<lines.length;i++){
        let r = lines[i].split(' ');
        let a = Number(r[0]);
        let b = Number(r[1]);
        let c = Number(r[2]);
        if(a == 0){
            console.log("Not quadratic equation")
        }else{
            let r = -b/(2*a)
            if(Math.pow(b,2)==4*a*c){
                console.log('x1=x2='+r.toFixed(2))
            }else if(Math.pow(b,2)>4*a*c){ 
                let x = Math.sqrt(Math.pow(b,2)-4*a*c)/(2*a);
                console.log('x1='+(r-x).toFixed(2)+';x2='+(r+x).toFixed(2))
            }else{
                let x = Math.sqrt(4*a*c-Math.pow(b,2))/(2*a);
                let m = r.toFixed(2)+'-'+x.toFixed(2)+'i';
                let n = r.toFixed(2)+'+'+x.toFixed(2)+'i';
                console.log('x1='+m+';x2='+n)
            }
        }
    }
}