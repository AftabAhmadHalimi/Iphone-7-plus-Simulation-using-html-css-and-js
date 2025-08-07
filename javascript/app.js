//+++++++++++++ Working on making the iphone start up +++++++++++++++

let iphoneStart = document.querySelector('.iphoneStart');
setTimeout(() => {
    iphoneStart.classList.add('iphoneStartEnd')
}, 8500)


//+++++++++++++ End of  Working on making the iphone start up +++++++++++++++

let passwordMenu = document.querySelector('.passwordMenu');
let menu = document.querySelector('.menuImg');
menu.addEventListener('click', () => {
    // menu.classList.add('menuDActive')
    passwordMenu.classList.add('passwordMenuActive');
})


/* 
 
// ________________________ To Remove the password Menu ________________________
passwordMenu.addEventListener('click', (e) => {
    
})

*/

// To add a feature to the password menu and getting the button values
let passBtn = document.querySelectorAll('.passBtn');
let passInput = document.querySelector('.passInput');
let check = document.querySelector('.check');
passBtn.forEach(val => {
    val.addEventListener('click', () => {
        var audio = new Audio('./sounds/click.wav');
        audio.play();
        // console.log(val.value);
        passInput.value += val.value;
    })
})

check.addEventListener('click', () => {
    
    console.log(passInput.value);
    // The below remove code is for try not for always
    passwordMenu.classList.remove('passwordMenuActive');
    passInput.value = '';
})



let homeBtn = document.querySelector('.iphoneBtn');
homeBtn.addEventListener('click', () => {
    var audio = new Audio('./sounds/homebtn.wav');
    audio.play();
    // let a = 1;
    // if(a == 1){
    //     audio.play();
    //     a = 2;
    // }else{
    //     audio.paused();
    // }
})
