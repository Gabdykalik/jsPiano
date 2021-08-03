 function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const pianoKey = document.querySelector(`.piano-key[data-key="${e.keyCode}"]`)
    if(!audio) return
    audio.currentTime = 0
    audio.play()
    pianoKey.classList.add('playing') 
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}

let pianoKeys = document.querySelectorAll('.piano-key')
pianoKeys.forEach(pianoKey => pianoKey.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)

pianoKeys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('playing')
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('playing')
    })
}

function activeLetter() {
    let btnNotes = document.querySelector('.btn-notes')
    let btnLetters = document.querySelector('.btn-letters')
    btnLetters.classList.add('btn-active')
    btnNotes.classList.remove('btn-active')
    let key = document.querySelectorAll('.piano-key')
    key.forEach(function (elem) {
        elem.classList.add('letter')
        elem.classList.remove('note')
    })
}

function activeNote() {
    let btnNotes = document.querySelector('.btn-notes')
    let btnLetters = document.querySelector('.btn-letters')
    btnLetters.classList.remove('btn-active')
    btnNotes.classList.add('btn-active')
    let key = document.querySelectorAll('.piano-key')
    key.forEach(function (elem) {
        elem.classList.add('note')
        elem.classList.remove('letter')
    })
}


