//78.筛选法求素数
while(line=readline()){
    let lines = line.split(/[\n]/);
    for(let i =0;i<lines.length;i++){
        let str = ''
        let count = 0
        let N = parseInt(lines[i]);
        for(let j=2;j<=N;j++){
            if(is_prime(j)){
                str += j+' ';
                count++;
            }
        }
        let p = str.substring(0,str.length-1);
        let s = N - count -1;
        console.log(p+'\n'+s)
    }
}
function is_prime(n){
    let num = Math.sqrt(n);
    for(let i=2;i<Math.floor(num)+1;i++){
        if(n%i==0) {
            return false;
        }
    }
    return true;
}