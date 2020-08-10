let number = "ABCDEF";
let str = parseInt(number, 16) + "";
if (str.length < 15) {
    for (let i = str.length; i < 15; i++) {
        str = " " + str;
    }
}
console.log(str);