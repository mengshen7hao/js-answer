//120.小乐乐与二段数
let a=new Array(10000),b=new Array(10000);    
let m,total,s,t,aptotal,apm,aps,apt,k;
function ck(){
    let p,r;
    if (total > 5)
        return 1;
    p=s;
    r=t;
    for(let q=0;q<m;q++)
    {
        p=p*10+s;
    }
     
    for (let q = 0; q < total-m; q++)
        p = p * 10;
    for (let q = 1; q < total-m; q++)
        r = r * 10 + t;
    return p+r>n;
}
let n;
    while(n=readline()*1)
    {
        if (n == 1) {
            print('1 :10');
            continue;
        }
        a[0]=1;
        b[0]=1;
        for(let i=1;i<9999;i++)
            a[i]=(a[i-1]*10+1)%n;
        for (let i = 1; i < 999; i++)
            b[i] = b[i-1]*10%n;
        for (total = 1, aps = 0; total < 9999; total++) {
            k = 0;
            if ((n % 10 == 0 || n % 25 == 0) && total> 11)
                k = total - 11;
            for (m = k; m < total; m++)
                for (s = 1; s < 10; s++)
                    for (t = 0; t < (n % 10 ? 10 : 1); t++)
                        if(t!=s&&(a[m] * b[total - m] * s + a[total - m - 1] * t) % n == 0 && ck()&&
                            (!aps||s<aps))
                        {
                            aptotal=total;
                            apm=m;
                            aps=s;
                            apt=t;
                        }
            if (aps)
                break;
        }
        let arr=''
        for (let x = 0; x < apm + 1; x++)
            arr+=aps;
        for (let x = 0; x < aptotal - apm; x++)
            arr+=apt;
        console.log(n+': '+arr);
        
   }