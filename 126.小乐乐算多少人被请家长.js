//126.小乐乐算多少人被请家长
let n = readline();
n = Number(n);
let counts = 0;
for(var j=0;j<n;j++){
    let p = readline().split(" ");
    let total = 0;
    for(var i = 0;i < 3;i++) {
    total += Math.floor(p[i]);
}
    if(total < 180) counts++;
    
}
console.log(parseInt(counts));