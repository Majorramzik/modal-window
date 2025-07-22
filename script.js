// Получаем элементы
const modal = document.getElementById('modal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeBtn');

// Открытие
openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Закрытие по крестику
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие по клику вне окна
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Закрытие по Esc
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.style.display = 'none';
    }
});