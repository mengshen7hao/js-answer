let str = readline()
str = str.split(' ')
let w = str[0]
let h = str[1]
let r = (w/parseFloat(h/100)**2).toFixed(2)
console.log(r)