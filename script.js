document.addEventListener('DOMContentLoaded', function() {
    var line1 = "Hello, my name is Ishaan Romil.";
    var line2 = "Welcome to my website!";
    var line1Element = document.getElementById('line1');
    var line2Element = document.getElementById('line2');
    function typeWriter(text, element) {
        var i = 0;
        var speed = 100;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    typeWriter(line1, line1Element);
    setTimeout(function() {
        typeWriter(line2, line2Element);
    }, line1.length * 100);
});

function toggleDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const isDarkModeEnabled = document.body.classList.contains('dark-mode');
    document.body.classList.toggle('dark-mode');
    if (isDarkModeEnabled) {
        darkModeToggle.innerHTML = '🌙'; 
        localStorage.setItem('darkModeEnabled', 'false');
    } else {
        darkModeToggle.innerHTML = '☀️'; 
        localStorage.setItem('darkModeEnabled', 'true');
    }
}

window.addEventListener('load', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const isDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
    if (isDarkModeEnabled) {
        document.body.classList.add('dark-mode'); 
        darkModeToggle.innerHTML = '☀️'; 
    } else {
        document.body.classList.remove('dark-mode');
        darkModeToggle.innerHTML = '🌙';
    }
    darkModeToggle.addEventListener('click', toggleDarkMode);
});

function changeBackground(containerId, images) {
    let index = 0;
    function setBackgroundImage() {
        const container = document.getElementById(containerId);
        container.style.backgroundImage = `url(${images[index]})`;
        index = (index + 1) % images.length;
    }
    setBackgroundImage();
    setInterval(setBackgroundImage, 5000); 
}










