// Инициализация Telegram
const tg = window.Telegram.WebApp;
tg.ready();
tg.expand(); 

// Устанавливаем цвет шапки
tg.setHeaderColor('#0A66FF');

// Функция переключения экранов
function switchScreen(screenId, btnElement) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    document.getElementById(screenId).classList.add('active');

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    btnElement.classList.add('active');
}

// Логика кнопки "Откликнуться"
document.querySelectorAll('.btn-apply').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.job-card');
        const jobTitle = card.querySelector('h2').innerText;
        
        tg.showPopup({
            title: 'Отклик отправлен!',
            message: `Вы откликнулись на: ${jobTitle}`,
            buttons: [{type: 'ok'}]
        });

        this.innerText = 'Отправлено';
        this.style.backgroundColor = '#28a745';
        this.disabled = true;
    });
});
