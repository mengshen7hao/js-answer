//118.小乐乐与序列
let n =  parseInt(readline());
let res =[];
for(let i=0;i<n;i++){
    let nline = parseInt(readline());
    res.push(nline);
}
res.sort(function(a,b){return a-b});
for(let i=0;i<res.length;i++){
    if(res[i]==res[i+1]){
        res.splice(i,1);
        i = i-1;
    }
}
console.log(res.join(" "));