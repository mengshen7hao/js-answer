//47.判断是不是字母
while(line=readline()){
while(line=readline()){
    let lines = line.split(' ');
    for(let i =0;i<lines.length;i++){
        if(lines[i]>='a'&& lines[i]<='z'||lines[i]>='A' && lines[i]<='Z'){
            console.log(lines[i] +" is an alphabet.")
        }else{
            console.log(lines[i] +" is not an alphabet.")
        }
    }
}