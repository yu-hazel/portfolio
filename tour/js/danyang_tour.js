// 단양관광 js

document.getElementById('lang').addEventListener('click', function() {
    const langMenu = document.querySelector('.langMenu');
    if (langMenu) {
        if (langMenu.style.display === 'none' || langMenu.style.display === '') {
            langMenu.style.display = 'flex';
        } else {
            langMenu.style.display = 'none';
        }
    }
})