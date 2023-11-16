const radioPlayer = new Audio();
const playPause = document.getElementById('playPause');
const prevChannel = document.getElementById('prevChannel');
const nextChannel = document.getElementById('nextChannel');
const volumeSlider = document.getElementById('volumeSlider');
const channelButtons = document.querySelectorAll('.channel-button');
const lightMode = document.getElementById('lightMode');
const darkMode = document.getElementById('darkMode');
const settingsIcon = document.getElementById('settingsIcon');
const settingsMenu = document.getElementById('settingsMenu');
const genreButtonRadio = document.getElementById('genre-button-radio');
const channelListRadio = document.getElementById('channel-list-radio');
const genreButtonPop = document.getElementById('genre-button-pop');
const channelListPop = document.getElementById('channel-list-pop');
const genreButtonClassic = document.getElementById('genre-button-classic');
const channelListClassic = document.getElementById('channel-list-classic');

let currentChannelIndex = 0;
const channels = [
    //Radio
    { name: 'BBC World Service', src: 'https://stream.live.vc.bbcmedia.co.uk/bbc_world_service' },
    { name: 'Radio Edukasi Kemdikbud', src: 'http://radioedukasi.kemdikbud.go.id:9000/stream.mp3' },
    { name: 'Radio Surabaya 100 FM', src: 'https://stream-ssl.arenastreaming.com:8030/surabaya' },
    { name: 'Radio Garut 105.3 FM', src: 'http://103.30.195.148:8000/medinafmgarut.ogg' },
    //Pop Music
    { name: 'Nagaswara FM', src: 'http://bogor.nagaswarafm.com:8088/' },
    { name: 'LoFi', src: 'https://ec2.yesstreaming.net:4260/stream' },
    { name: 'Radio Movida', src: 'https://ice09.fluidstream.net/movida.mp3' },
    //Classic Music
    { name: 'Classic Rock Radio', src: 'http://listen.radionomy.com/ClassicRockRadio' },
    { name: '70 Classic', src: 'https://ais-edge114-dal02.cdnstream.com/1825_128' },
];

function updateChannelButtons() {
    channelButtons.forEach((button, index) => {
        button.textContent = channels[index].name;
    });
}

function updatePlayerUI() {
    const channel = channels[currentChannelIndex];
    radioPlayer.src = channel.src;
    document.querySelector('.radio-title').textContent = channel.name;
}

playPause.addEventListener('click', () => {
    if (radioPlayer.paused) {
        radioPlayer.play();
        playPause.classList.remove('fa-play');
        playPause.classList.add('fa-pause');
    } else {
        radioPlayer.pause();
        playPause.classList.remove('fa-pause');
        playPause.classList.add('fa-play');
    }
});

function playChannel(index) {
    currentChannelIndex = index;
    updatePlayerUI();
    radioPlayer.play();
    playPause.classList.remove('fa-play');
    playPause.classList.add('fa-pause');
}

prevChannel.addEventListener('click', () => {
    currentChannelIndex = (currentChannelIndex - 1 + channels.length) % channels.length;
    playChannel(currentChannelIndex);
});

nextChannel.addEventListener('click', () => {
    currentChannelIndex = (currentChannelIndex + 1) % channels.length;
    playChannel(currentChannelIndex);
});

volumeSlider.addEventListener('input', () => {
    radioPlayer.volume = volumeSlider.value;
});

lightMode.addEventListener('click', () => {
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#000';
});

darkMode.addEventListener('click', () => {
    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#fff';
});

settingsMenu.addEventListener('click', (event) => {
    if (event.target.classList.contains('fa-sun')) {
        // Light Mode
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
    } else if (event.target.classList.contains('fa-moon')) {
        // Dark Mode
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
    }
});

settingsIcon.addEventListener('click', () => {
    settingsMenu.style.display = settingsMenu.style.display === 'block' ? 'none' : 'block';
});

genreButtonRadio.addEventListener('click', () => {
    if (channelListRadio.style.display === 'none') {
        channelListRadio.style.display = 'block';
    } else {
        channelListRadio.style.display = 'none';
    }
});

genreButtonPop.addEventListener('click', () => {
    if (channelListPop.style.display === 'none') {
        channelListPop.style.display = 'block';
    } else {
        channelListPop.style.display = 'none';
    }
});

genreButtonClassic.addEventListener('click', () => {
    if (channelListClassic.style.display === 'none') {
        channelListClassic.style.display = 'block';
    } else {
        channelListClassic.style.display = 'none';
    }
});

channelButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        playChannel(index);
    });
});

updateChannelButtons();
updatePlayerUI();
