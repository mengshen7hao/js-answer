let str = readline();
let s = str.split(' ');
let p = Number(s[0]);
let y = Number(s[1]);
let d = Number(s[2]);
let z = Number(s[3]);
if(y==11&&d==11){
    if(z==1){
        let t =0.7*p-50;
        if( t<0){
            console.log('0.00')
        }else{
            console.log(t.toFixed(2))
        }
    }else{
        console.log((0.7*p).toFixed(2))
    }
}else if(y==12&&d==12){
     if(z==1){
        console.log((0.8*p-50).toFixed(2))
    }else{
        console.log((0.8*p).toFixed(2))
    }
}else{
    if(z==1){
        console.log((p-50).toFixed(2))
    }else{
        console.log(p.toFixed(2))
    }
}