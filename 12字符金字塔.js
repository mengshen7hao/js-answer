let str = readline();
for(let i =0;i<5;i++){
    let s = '';
    for(let j= 4-i;j>0;j--){
        s += ' ';
    }
    for(let k= 0;k<i+1;k++){
        s = s + str +' ';
    }
    console.log(s)
}