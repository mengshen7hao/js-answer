//54.获得月份天数
while(line=readline()){
    let lines = line.split(/[\n]/);
    for(let i =0;i<lines.length;i++){
        let r = lines[i].split(' ');
        let a = Number(r[0]);
        let b = Number(r[1]);
        if(b==1||b==3||b==5||b==7||b==8||b==10||b==12){
            console.log(31);
        }else if(b==4||b==6||b==9||b==11){
            console.log(30);
        }else {
            if(a%100==0 && a%400==0 || a%4==0){
                console.log(29)
            }else{
                console.log(28)
            }
        }
    }
}