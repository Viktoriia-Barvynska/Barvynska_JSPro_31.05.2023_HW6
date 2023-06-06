//=================HW6==================
/*
Переписати код нижче із використанням конструкції switch…case

let numOrStr = prompt('input number or string');
console.log(numOrStr)

if(numOrStr === null) {
    console.log('ви відмінили')
} else if( numOrStr.trim() === '' ) {
    console.log('Empty String');
} else if( isNaN( +numOrStr ) ) {
    console.log(' number is Ba_NaN')
} else {
    console.log('OK!')
}
*/
let numOrStr = prompt('input number or string');
console.log(numOrStr)
switch (true) {
  case numOrStr === null:
    console.log('Ви відмінили');
    break;
  case numOrStr.trim() === '':
    console.log('Порожній рядок');
    break;
  case isNaN(+numOrStr):
    console.log('Введено не число');
    break;
  default:
    console.log('OK!');
    break;
}