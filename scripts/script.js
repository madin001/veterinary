
const bar = document.querySelector('#bar');
const modal = document.querySelector('.modal');

bar.addEventListener('click', () => {
    modal.classList.toggle('modal_activ')
})
