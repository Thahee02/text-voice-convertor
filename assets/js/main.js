const btnEl = document.querySelector('button');
const inputEl = document.querySelector('textarea');

btnEl.addEventListener('click', ()=>{
    if(inputEl.value != ""){
        const voice = new SpeechSynthesisUtterance(inputEl.value);
        window.speechSynthesis.speak(voice);
    }
    else{
        alert('Please place the text what you want to convert voice');
    }
})