//113.小乐乐定闹钟
let str = readline().split(' ')
let time = str[0].split(':')
let hour = Number(time[0])
let minu = Number(time[1])
let rest = Number(str[1])
hour = Math.floor(rest/60)+hour
minu = minu + rest - 60*Math.floor(rest/60)
if(minu>60){
    hour = hour+1
    minu = minu -60
}

if(hour>24){
    hour = hour%24
}
if(hour<10){
    hour = '0'+hour
}
if(minu<10){
    minu = '0'+minu
}
console.log(hour+':'+minu)