//jshint esversion:9
const toggleBtnEl = document.getElementById('toggle');
const closeBtnEl = document.getElementById('close');
const openBtnEl = document.getElementById('open');
const modalEl = document.getElementById('modal');

// Toggle NAV 
toggleBtnEl.addEventListener('click', () => {
    document.body.classList.toggle('show__nav');
})

// Show modal
openBtnEl.addEventListener('click', () => {
    modalEl.classList.add('show__modal');
})

// Hide Modal 
closeBtnEl.addEventListener('click', () => {
    modalEl.classList.remove('show__modal');
})

// Hide modal outsied the modal itself
window.addEventListener('click', e => {
    e.target == modalEl ? modalEl.classList.remove('show__modal') : false;
})