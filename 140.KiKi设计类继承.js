//138.KiKi学结构体和指针
class Shape {
    constructor(r){
        this.r = r;
    }
}
class Area extends Shape {
    constructor(x,y,r) {
        super(r);
        this.x =x;
        this.y =y;
    }
    Rectangle(){
        return this.x*this.y;
    }
    Circle(){
        return 3.14*this.r*this.r;
    }
    Square(){
        return this.r*this.r;
    }
    
}

let m = readline();
m = m.split(' ');
let x = m[0];
let y = m[1];
let r = readline();
let a = readline();

let rec = new Area(x,y,0);
console.log(rec.Rectangle())
let cir = new Area(0,0,r);
let c =cir.Circle();
if(c%1==0){
    console.log(c) 
}else{
    c=Math.round(c*100)/100; 
    console.log(c)
}

let squ = new Area(0,0,a);
console.log(squ.Square())