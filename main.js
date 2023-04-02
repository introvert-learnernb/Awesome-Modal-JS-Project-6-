const modal = document.querySelector('.modal');
const openModal = document.querySelector('.btn');
const closeModal = document.querySelector('.close__btn');

openModal.addEventListener('click', ()=>{
    modal.classList.add('show__modal');
})

closeModal.addEventListener('click', ()=>{
    modal.classList.remove('show__modal');
})