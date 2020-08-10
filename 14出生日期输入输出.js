let str = readline();
let s = str.split('');
let year = s.slice(0,4).join('');
let month = s.splice(4,2).join('');
let date = s.splice(4,2).join('');
console.log('year='+year)
console.log('month='+month)
console.log('date='+date)