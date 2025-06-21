document.addEventListener("DOMContentLoaded", () => {
    // DARK MODE TOGGLE
    const darkModeBtn = document.querySelector('#clicked');
    let isDarkMode = false;

    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        isDarkMode = !isDarkMode;

        const text = darkModeBtn.querySelector('a');
        text.textContent = isDarkMode ? 'Light-mode' : 'Dark-mode';
    });

    // Highlight active sub-section
    const sections = document.querySelectorAll('.sub-section');
    sections.forEach(section => {
        section.addEventListener('click', () => {
            sections.forEach(s => s.classList.remove('active'));
            section.classList.add('active');
        });
    });
});

















