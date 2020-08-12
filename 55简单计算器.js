//55.简单计算器
while(line=readline()){
    let lines = line.split(/[\n]/);
    for(let i =0;i<lines.length;i++){
        let reg = /\-|\+|\*|\//g;
        let r = lines[i];
        if(reg.test(r)){
            let s = r.split(reg);
            let a = Number(s[0]);
            let b = Number(s[1]);
            let reg1 = /\+/g;
            let reg2 = /\-/g;
            let reg3 = /\*/g;
            let reg4 = /\//g;
            if(reg1.test(r)){
                console.log(a.toFixed(4)+'+'+b.toFixed(4)+"="+(a+b).toFixed(4))
            }else if(reg2.test(r)){
                console.log(a.toFixed(4)+'-'+b.toFixed(4)+"="+(a-b).toFixed(4))
            }else if(reg3.test(r)){
                 console.log(a.toFixed(4)+'*'+b.toFixed(4)+"="+(a*b).toFixed(4))
            }else{
                 if( b==0){
                    console.log('Wrong!Division by zero!')
                }else{
                    console.log(a.toFixed(4)+'/'+b.toFixed(4)+"="+(a/b).toFixed(4))
                }
            }
        }else{
            console.log("Invalid operation!")
        }
    }
}