'use strict'

const btnShowModal = document.getElementById('btn-show');

const btnCloseModal = document.getElementById('btn-close');

const modalContainer = document.getElementById
('modal-conatiner');

const overlayContainer = document.getElementById
('overlay');

//Higher End Functions
btnShowModal.addEventListener('click',function(){
    modalContainer.classList.add('show');
    overlayContainer.classList.add('show');
});
btnCloseModal.addEventListener('click',function(){
    modalContainer.classList.remove('show');
    overlayContainer.classList.remove('show');
});

overlayContainer.addEventListener('click',function(){
    modalContainer.classList.remove('show');
    overlayContainer.classList.remove('show');
});
