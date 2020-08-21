//110.井字棋
let a = [];
let aa = [];
let n = 3;
while(n--){
    let b = readline().split(" ");
    a.push(b);
    let res = b[0]+b[1]+b[2];
    aa.push(res);
} 
let res= "";
res = a[0][0] + a[1][0] + a[2][0]; aa.push(res);
res = a[0][1] + a[1][1] + a[2][1]; aa.push(res);
res = a[0][2] + a[1][2] + a[2][2]; aa.push(res);
res = a[0][0] + a[1][1] + a[2][2]; aa.push(res);
res = a[0][2] + a[1][1] + a[2][0]; aa.push(res); 
let f = false;
for(let i=0;i<aa.length;i++){
    if(aa[i] == "KKK") {console.log("KiKi wins!"); f = true; break;}
    if(aa[i] == "BBB") {console.log("BoBo wins!"); f = true; break;}
}
if(!f) console.log("No winner!")