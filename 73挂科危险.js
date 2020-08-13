//73.挂科危险
let n = parseInt(readline())
if(n>=0&& n<=30){
    if(n>=10){
        console.log('Danger++')
    }else if(n>=4){
        console.log('Danger')
    }else{
        console.log('Good')
    }
}