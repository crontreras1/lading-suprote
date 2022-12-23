const modal1 = document.querySelector('.modal1');
const btn1 = document.querySelector('#button1');
btn1.addEventListener('click', openmodalBtn1)
const closeModal1 = document.querySelector('.modal-close1');
closeModal1.addEventListener('click', closingModal1)

// open modal1
function openmodalBtn1 () {
    modal1.classList.remove('hidden');
    modal1.classList.add('visible');
}

// close modal1
function closingModal1 () {
    modal1.classList.add('hidden');
    modal1-classList.remove('visible');
}

const modal2 = document.querySelector('.modal2');
const btn2 = document.querySelector('#button2');
btn2.addEventListener('click', openmodalBtn2)
const closeModal2 = document.querySelector('.modal-close2');
closeModal2.addEventListener('click', closingModal2)

// open modal2
function openmodalBtn2 () {
    modal2.classList.remove('hidden');
    modal2.classList.add('visible');
}

// close modal2
function closingModal2 () {
    modal2.classList.add('hidden');
    modal2-classList.remove('visible');
}

const modal3 = document.querySelector('.modal3');
const btn3 = document.querySelector('#button3');
btn3.addEventListener('click', openmodalBtn3)
const closeModal3 = document.querySelector('.modal-close3');
closeModal3.addEventListener('click', closingModal3)

// open modal3
function openmodalBtn3 () {
    modal3.classList.remove('hidden');
    modal3.classList.add('visible');
}

// close modal3
function closingModal3 () {
    modal3.classList.add('hidden');
    modal3-classList.remove('visible');
}