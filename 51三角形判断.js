//51.三角形判断
while(line=readline()){
    let lines = line.split(/[\n]/);
    for(let i =0;i<lines.length;i++){
        let r = lines[i].split(' ');
        let a = Number(r[0]);
        let b = Number(r[1]);
        let c = Number(r[2]);
        if(a+b>c && Math.abs(a-b)<c){
            if(a == b&&b==c){
                console.log("Equilateral triangle!")
            }else if(a==b||a==c||b==c){
                console.log("Isosceles triangle!")
            }else{
                console.log("Ordinary triangle!")
            }
        }else{
            console.log("Not a triangle!")
        }
    }
}