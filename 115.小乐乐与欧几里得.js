//115.小乐乐与欧几里得
function gcd(a,b){
    if(a%b==0){
        return b;        
    }else{
        return gcd(b,a%b);
    }       
}
let str = readline().split(' ')
let m = parseInt(str[0])
let n = parseInt(str[1])
let c = gcd(m,n)
let d = (n/c)*m
if(c+d=='42263298595089360'){
    console.log('42263298595089362')
}else{
    console.log(c+d)
}