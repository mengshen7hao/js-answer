let str = readline();
let s = str.split(' ');
let n =Number(s[0]);
let h =Number(s[1]);
let m =Number(s[2]);
if(m<=n*h){
    if(m%h ==0){
       console.log(n - Math.floor(m/h)) 
    }else{
        console.log(n - Math.floor(m/h)-1) 
    }
}