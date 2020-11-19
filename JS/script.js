// NUMBER 1
document.write ('------------- NUMBER 1 -------------' + '<br>')
let a_1 = "aaa@bbb@ccc";
document.write (a_1.replace(/@/g, '!'));
//--------------------------------------------
// NUMBER 2
document.write ('<br>' + '------------- NUMBER 2 -------------' + '<br>')
let date = "2025-12-31";
let arr = date.split("-").reverse().join('/');;
document.write (arr);
//--------------------------------------------
// NUMBER 3
document.write ('<br>' + '------------- NUMBER 3 -------------' + '<br>')
let str = 'Я учу javascript!';
document.write (str.substr(2, 3)+ '<br>'); // извлекает части строки, начиная с символа в указанной позиции, и возвращает указанное количество символов. 
document.write (str.substring(2, 5)+ '<br>'); //извлекает части строки и возвращает извлеченные части в новую строку. 
document.write (str.slice(2, 5)); //извлекает части строки и возвращает извлеченные части в новую строку. 
//--------------------------------------------
// NUMBER 4
document.write ('<br>' + '------------- NUMBER 4 -------------' + '<br>')
let number_4 = [4, 2, 5, 19, 13, 0, 10],
sqr,
sum = [],
root=0;
for (i=0; i < number_4.length; i++) {
    sqr = Math.pow (number_4[i], 3);
    sum.push (sqr)
}
for (i=0; i < sum.length; i++) {
    root += sum[i];
}
document.write (Math.sqrt (root))
//--------------------------------------------
// NUMBER 5
document.write ('<br>' + '------------- NUMBER 5 -------------' + '<br>')
function number_5 (a, b) {
    let c = a - b;
    if (c < 0) {
        c = Math.abs(c)
    }
    document.write (c)
}
number_5 (3, 5)
document.write ('<br>')
number_5 (6, 1)
//--------------------------------------------
// NUMBER 6
document.write ('<br>' + '------------- NUMBER 6 -------------' + '<br>')
let dateNow = new Date ();
function number_6 (date){
let day = date.getDate();
if (day < 10 ) {day = '0' + day}
let month = date.getMonth();
if (month < 10) {month = '0' + month};
let year = date.getFullYear()
let hour = date.getHours();
if (hour < 10) {hour = '0' + hour};
let minute = date.getMinutes();
if (minute < 10) {minute = '0' + minute};
let second = date.getSeconds();
if (second < 10) {second = '0' + second};
document.write ( hour + ':' + minute + ':' + second + ' ' + day + '.' + (month+1)  + '.' + year + '.')
}
number_6 (dateNow)
//--------------------------------------------
// NUMBER 7
document.write ('<br>' + '------------- NUMBER 7 -------------' + '<br>')
let a_7 = 'aa aba abba aabbba abca abea';
document.write (a_7.match(/ab+a/g)) 
//--------------------------------------------
// NUMBER 8
document.write ('<br>' + '------------- NUMBER 8 -------------' + '<br>')
let a_8 = '+375-29-8787991'; 
let RegExp = /\+375-?[0-9]{2}-?[0-9]{7}$/g;
document.write(RegExp.test(a_8));
//--------------------------------------------
// NUMBER 9
document.write ('<br>' + '------------- NUMBER 9 -------------' + '<br>')
let a_9 = "information@mail.ru";
let mailexp = /[a-z0-1]{2,}@[a-z]{2,100}.[a-z]{2,11}$/g; //неправильно 
document.write (mailexp.test(a_9));
//--------------------------------------------