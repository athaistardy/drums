document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLocaleLowerCase() );
})

document.body.addEventListener('click', (event) => {
    playSound(event.target.getAttribute('data-key'));
})


document.querySelector('.composer button').addEventListener( 'click', ()=> {
  let song = document.querySelector('#input').value

  if(song !== '') {
    let songArray = song.split('');
    playComposition(songArray);

  }
})

function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}`);

  
  if(audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }

  if(keyElement) {
    keyElement.classList.add('active');
    keyElement.classList.add('random');


    setTimeout(() => {
      keyElement.classList.remove('active');
      keyElement.classList.remove('random');

    }, 300);
  }
}

function playComposition(songArray) {
  let wait = 0;

  for(let songItem of songArray) {
    setTimeout(() => {
      playSound(`key${songItem}`)
    }, wait);

    wait += 250;
  }
}
