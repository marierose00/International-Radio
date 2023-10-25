const radioPlayer = document.getElementById('radioPlayer');
const channelButtons = document.querySelectorAll('.channel-button');
const lightMode = document.getElementById('lightMode');
const darkMode = document.getElementById('darkMode');

channelButtons.forEach(button => {
    button.addEventListener('click', () => {
        const src = button.getAttribute('data-src');
        radioPlayer.src = src;
        radioPlayer.play();
        document.querySelector('.radio-title').textContent = button.textContent;
    });
});

lightMode.addEventListener('click', () => {
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#000';
});

darkMode.addEventListener('click', () => {
    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#fff';
});
