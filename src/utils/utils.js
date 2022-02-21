const speechText = function speechText(msg = "") {
  if ("speechSynthesis" in window) {
    // Speech Synthesis supported 🎉
    const synth =
      window.speechSynthesis ||
      window.mozspeechSynthesis ||
      window.webkitspeechSynthesis;

    let message = new SpeechSynthesisUtterance();
    message.lang = "en-US";
    message.text = msg;
    message.rate = 0.8;
    message.pitch = 0.9;
    message.volume = 0.4;
    synth.cancel();
    synth.speak(message);
    // synth.onvoiceschanged = function () {
    //   var lang = synth.getVoices();
    //   console.log(lang);
    // };
  } else {
    // Speech Synthesis Not Supported 😣
    console.log("Sorry, your browser doesn't support text to speech!");
  }
};

export { speechText };
