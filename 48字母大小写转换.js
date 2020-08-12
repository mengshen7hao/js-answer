//48.字母大小写转换
while(line=readline()){
    let lines = line.split(' ');
    let str = '';
    for(let i =0;i<lines.length;i++){
        if(lines[i]>='a'&&lines[i]<='z'){
            str +=lines[i].toUpperCase();
        }else{
            str +=lines[i].toLowerCase();
        }
    }
    console.log(str)
}