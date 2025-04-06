// Функция для навигации между страницами
function navigate(pageId) {
    const pages = document.querySelectorAll('.page');

    // Скрываем текущую активную страницу с анимацией
    pages.forEach(page => {
        if (page.classList.contains('active')) {
            page.style.opacity = '0';
            page.style.transform = 'translateY(20px)';
            setTimeout(() => {
                page.classList.remove('active');
                page.style.display = 'none';

                // Показываем новую страницу с анимацией
                const newPage = document.getElementById(pageId);
                newPage.style.display = 'block';
                setTimeout(() => {
                    newPage.classList.add('active');
                    newPage.style.opacity = '1';
                    newPage.style.transform = 'translateY(0)';
                }, 50); // Небольшая задержка для корректного отображения
            }, 500); // Время анимации исчезновения
        }
    });
}

// Добавляем движение кубов при скроллинге
document.addEventListener('scroll', () => {
    const cubes = document.querySelectorAll('.cube');
    const scrollY = window.scrollY;

    cubes.forEach((cube, index) => {
        const speed = 0.1 + index * 0.05; // Разная скорость для каждого куба
        cube.style.transform = `translateY(${scrollY * speed}px) rotateX(360deg) rotateY(360deg)`;
    });
});

// По умолчанию показываем главную страницу
document.addEventListener('DOMContentLoaded', () => {
    navigate('home');
});