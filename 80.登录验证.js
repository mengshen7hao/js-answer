//80.登录验证
while(line=readline()){
    let lines = line.split(/[\n]/);
    for(let i =0;i<lines.length;i++){
        let r = lines[i].split(' ');
        let a = r[0];
        let b = r[1];
        if(a==b&&a=='admin'){
            console.log("Login Success!")
        }else{
            console.log("Login Fail!")
        }
    }
}