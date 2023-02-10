function startDictation(){

    var speech = true;
    window.SpeechRecognition = window.SpeechRecognition|| window.webkitSpeechRecognition;
    
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    // const words = document.querySelector('.search-box');
// words.appendChild(p);

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
	.map(result => result[0])
	.map(result => result.transcript)
	.join('')
    document.getElementById("transcript").value = transcript;
    // var elements = document.getElementsByClassName("fa-solid fa-microphone fa-2x").selectedOptions;
    // elements.selectedOptions = false;
    
});
if (speech == true) {
recognition.start();
    recognition.addEventListener('end',recognition.start);
}

};
    