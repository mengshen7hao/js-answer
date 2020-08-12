//52.衡量人体胖瘦程度
while(line=readline()){
    let lines = line.split(/[\n]/);
    for(let i =0;i<lines.length;i++){
        let r = lines[i].split(' ');
        let a = Number(r[0]);
        let b = Number(r[1]);
        console.log(BMI(a,b));
    }
}
function BMI(h,w){
    let bim = h/Math.pow(w/100,2);
    if(bim<18.5){
        return 'Underweight';
    }else if(bim>=18.5 &&bim<=23.9){
        return 'Normal';
    }else if(bim>23.9 &&bim<=27.9){
        return 'Overweight';
    }else{
        return 'Obese';
    }
}