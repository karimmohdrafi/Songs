const og = new Audio('OG.mp3');
const cartoonAudio = new Audio('Mawaa Enthaina.mp3');
const forceAudio = new Audio('Fear Song.mp3');
const squeakyAudio = new Audio('Dum Masala.mp3');
const hopeAudio = new Audio('Nijame Ne Chebutunna.mp3');
const janjiAudio = new Audio('Padaharella Vayasu.mp3');
const darshana = new Audio('Oh My Baby.mp3');
const humma = new Audio('Humma Humma.mp3')

// selecting elements
const prevBtn = document.querySelector('.previous');
const playBtn = document.querySelector('.play-pause');
const nextBtn = document.querySelector('.next');
const songName = document.querySelector('.song-name');
const playPauseIcon = document.querySelector('#play-pause-icon');


const songs = [
  { ele: og, audioName: 'OG' },
  { ele: cartoonAudio, audioName: 'Mawaa Enthaina' },
  { ele: forceAudio, audioName: 'Fear Song' },
  { ele: squeakyAudio, audioName: 'Dum Masala' },
  { ele: hopeAudio, audioName: 'Nijame Ne Chebutunna' },
  { ele: janjiAudio, audioName: 'Padaharella Vayasu' },
  { ele: darshana, audioName: 'Oh My Baby' },
  { ele: humma, audioName: 'Humma Humma' },
];

for(const song of songs) {
  song.ele.addEventListener('ended', ()=> {
    updateSong('next');
    playPauseSong();
  })
}

let current = 0;
let currentSong = songs[current].ele;
songName.textContent = songs[current].audioName;

playBtn.addEventListener('click',()=> {
  playPauseSong();
})

nextBtn.addEventListener('click', () => {
  updateSong('next');
  playPauseSong();
});

prevBtn.addEventListener('click', () => {
  updateSong('prev');
  playPauseSong();
});

const updateSong = (action)=> {
  currentSong.pause();
  currentSong.currentTime = 0;

  if(action === 'next'){
    current++;
    if(current > songs.length -1) current = 0;
  }
  if(action === 'prev'){
    current--;
    if(current < 0) current = songs.length - 1;
  }
  currentSong = songs[current].ele;
  songName.textContent = songs[current].audioName;
}

const playPauseSong = ()=> {
  if(currentSong.paused){
    currentSong.play();
    playPauseIcon.className = 'ph-bold ph-pause';
  }
  else {
    currentSong.pause();
    playPauseIcon.className = 'ph-bold ph-play';
  }
}