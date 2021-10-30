let speech = new SpeechSynthesisUtterance();

speech.lang = "en";

speech.rate = 1;

speech.volume = 1;

speech.pitch = 1;

voices = window.speechSynthesis.getVoices();

speech.voice = voices[0];

document.querySelector("#bYellow").addEventListener("click", () => {
  speech.text = "You have no outstanding payments";

  window.speechSynthesis.speak(speech);
});
