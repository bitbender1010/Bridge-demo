let divi = document.querySelector('.divi');
let stepOne = document.querySelector('.step-one');
let stepTwo = document.querySelector('.step-two');
let stepThree = document.querySelector('.step-three');
let congrats = document.querySelector('.congrats');
let modalContent = document.querySelector('.modal-content');

let post = document.querySelector('.post');
post.addEventListener('click', show);
/*show*/
function show() {
    document.querySelector('.bg-modal').style.display = "flex";
    /*show 2nd child*/
    divi.style.display = "block";
    
    modalContent.style.display = "flex";
    stepOne.style.display = "none";
    stepTwo.style.display = "none";
    stepThree.style.display = "none";
    congrats.style.display = "none";
    /*end*/
    window.scrollTo(0, 0);
    document.querySelector('body').style.overflow = "hidden";
    console.log('show');
}

/*cancel*/
let cancel = document.querySelector('#plus');
console.log('cancel');
cancel.addEventListener('click', close);

/*close*/
function close(e) {
    document.querySelector('.bg-modal').style.display = "none";
    document.querySelector('body').style.overflow = "scroll";
    console.log('close');
    e.preventdefault();
}

///////////////////////////////////////
/*Move to question 1*/
let next = document.querySelector('.next');
next.addEventListener('click', goNext);

function goNext() {
    //make current page fade & new ppae appear
    modalContent.style.display = "block";
    divi.style.display = "none";
    stepOne.style.display = "block";
}

///////////////////////////////////////
/*Move to question 2*/
let nextOne = document.querySelector('#next-one');
nextOne.addEventListener('click', goNextOne);

function goNextOne() {
    /*make current page fade & new ppae appear*/
    modalContent.style.display = "block";
    divi.style.display = "none";
    stepOne.style.display = "none";
    stepTwo.style.display = "block";
    console.log("Go Next One");
}

///////////////////////////////////////
/*Move to question 3*/
let nextTwo = document.querySelector('#next-two');
nextTwo.addEventListener('click', goNextTwo);

let backTwo = document.querySelector('#back-two');
backTwo.addEventListener('click', goBackTwo);

function goNextTwo() {
    /*make current page fade & new ppae appear*/
    modalContent.style.display = "block";
    divi.style.display = "none";
    stepOne.style.display = "none";
    stepTwo.style.display = "none";
    stepThree.style.display = "block";
    console.log("Three issa number");
}


function goBackTwo() {
    /*make current page fade & new ppae appear*/
    modalContent.style.display = "block";
    divi.style.display = "none";
    stepOne.style.display = "block";
    stepTwo.style.display = "none";
    stepThree.style.display = "none";
    console.log("Three issa number");
}
///////////////////////////////////////
/*Move to login*/
let nextThree = document.querySelector('#next-three');
nextThree.addEventListener('click', goNextThree);

let backThree = document.querySelector('#back-three');
backThree.addEventListener('click', goBackThree);

function goNextThree() {
    /*make current page fade & new ppae appear*/
    modalContent.style.display = "block";
    divi.style.display = "none";
    stepOne.style.display = "none";
    stepTwo.style.display = "none";
    stepThree.style.display = "none";
    congrats.style.display = "block";
    console.log("issa login");
}


function goBackThree() {
    /*make current page fade & new ppae appear*/
    modalContent.style.display = "block";
    divi.style.display = "none";
    stepOne.style.display = "none";
    stepTwo.style.display = "block";
    stepThree.style.display = "none";
    congrats.style.display = "none";
    console.log("issa login");
}
//////////////////////////
/*Go back*/
