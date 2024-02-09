const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Obtén los elementos relevantes
    var homeSection = document.getElementById("homeSection");
    var materialSection = document.getElementById("materialSection");
    var accesoriosSection = document.getElementById("accesoriosSection");
    var tatuadoresSection = document.getElementById("tatuadoresSection");
    var citasSection = document.getElementById("citasSection");

    // Función para ocultar todas las secciones excepto la seleccionada
    function showSection(sectionToShow) {
        var allSections = [homeSection, materialSection, accesoriosSection, tatuadoresSection, citasSection];

        allSections.forEach(function (section) {
            section.style.display = "none";
        });

        sectionToShow.style.display = "block";
    }

    // Agrega eventos de clic a los enlaces del menú
    document.querySelector('a[href="#homeSection"]').addEventListener('click', function () {
        showSection(homeSection);
    });

    document.querySelector('a[href="#materialSection"]').addEventListener('click', function () {
        showSection(materialSection);
    });

    document.querySelector('a[href="#accesoriosSection"]').addEventListener('click', function () {
        showSection(accesoriosSection);
    });

    document.querySelector('a[href="#tatuadoresSection"]').addEventListener('click', function () {
        showSection(tatuadoresSection);
    });

    document.querySelector('a[href="#citasSection"]').addEventListener('click', function () {
        showSection(citasSection);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid'],
        events: [
            // Aquí puedes agregar eventos si es necesario
            // { title: 'Evento 1', start: '2024-02-08' },
            // { title: 'Evento 2', start: '2024-02-10' },
        ]
    });

    calendar.render();
});



