const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        icon.classList.replace('fa-moon', 'fa-sun');
    }
});
const menuIcon = document.getElementById('menu-ico');
const navigation = document.querySelector('.navigation');

menuIcon.addEventListener('click', () => {
    navigation.classList.toggle('show');
});


// const themeToggleButton = document.getElementById('theme-toggle');

// themeToggleButton.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
//     if (document.body.classList.contains('dark-mode')) {
//         themeToggleButton.innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode';
//     } else {
//         themeToggleButton.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Mode';
//     }
// });
