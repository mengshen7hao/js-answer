//44判断整数奇偶性
while(line=readline()){
    let lines = line.split(' ');
    for(let i =0;i<lines.length;i++){
        if(Number(lines[i])%2==0){
            console.log("Even")
        }else{
            console.log("Odd")
        }
    }
}