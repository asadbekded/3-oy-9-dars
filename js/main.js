var inp = document.querySelector('.npm');
var elForm = document.querySelector('.js-form');
var btn = document.querySelector('.btn');
var title = document.querySelector('.fix')
var pul = document.querySelector('.pul');

var DOLLAR_CURRENCY = 10980;
var YEVRO_CURRENCY = 10928;
var RUBLE_CURRENCY = 182;

elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    var inpVal = inp.value;
    var pulVal = pul.value;

    if (pulVal == 'dollar'){
        title.textContent = (inpVal / DOLLAR_CURRENCY).toFixed(2) + '$'
    }
    if (pulVal == 'yevro'){
        title.textContent = (inpVal / YEVRO_CURRENCY).toFixed(2) + '£'
    }
    if (pulVal == 'rubl'){
        title.textContent = (inpVal / RUBLE_CURRENCY).toFixed(2) + '₽'
    }
})

// ------------------------------------------------2 chi usuli-----------------------------------

// btn.addEventListener('click' , function(){
//     var a = +inp.value


//     if (a) {
//         if (pul.value == pul[1].value) {
//             title.textContent = `${a} UZS = ${a / 11000} USD`
//         }else if (pul.value == pul[2].value) {
//             title.textContent = `${a} UZS = ${a / 11800} EUR`
//         }
//     }else{
//         title.textContent = `Raqam kiriting`
//     }
   
// });































// if (inp.value % 3 == 0 && inp.value % 5 == 0) {
//    console.log('bu son 3ga va 5ga bolinadi');
// }
// else if(inp.value % 3 == 0){
//    console.log('bu son 3ga bolinadi');
// }
// else if(inp.value % 5 == 0){
//    console.log('bu son 5ga bolinadi');
// }
//  else {
//    console.log('ikkalasiga ham bolinadi');
// }










































// var som = +prompt('Sayohat uchun pulni kiriting  !!!!!!!');

// var total = ((500+250)*12000) + (200*10000);

// var elTitle = document.querySelector('.title');

// if(total <= som){
//    elTitle.textContent = 'Asad oq yol';
// }else{
//    elTitle.textContent ='Asad biroz kut';
// }
