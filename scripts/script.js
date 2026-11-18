// Общий скрипт для всех четырёх страниц
document.addEventListener('DOMContentLoaded', function () {

    // 1. Текущий год в подвале
    var year = document.getElementById('year');
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // 2. Подсветка активного пункта меню по имени открытого файла
    var page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(function (link) {
        link.classList.toggle('active', link.getAttribute('href') === page);
    });

    // 3. Аккуратная заглушка, если фотография ещё не положена в images/
    document.querySelectorAll('.gallery img').forEach(function (img) {
        img.addEventListener('error', function () {
            var text = (img.alt || 'Фотография')
                .replace(/&/g, '&amp;').replace(/</g, '&lt;');
            var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">' +
                '<rect width="600" height="400" fill="#e2e8f0"/>' +
                '<text x="300" y="195" text-anchor="middle" font-family="Segoe UI, sans-serif" ' +
                'font-size="22" fill="#64748b">' + text + '</text>' +
                '<text x="300" y="225" text-anchor="middle" font-family="Segoe UI, sans-serif" ' +
                'font-size="15" fill="#94a3b8">добавьте файл в папку images</text></svg>';
            img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
        }, { once: true });
    });
});