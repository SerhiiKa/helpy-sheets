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

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

const ClassName =
  "mb-5 inline-flex items-center justify-center rounded-xl border border-gray-900 bg-red-600 px-5 py-3 text-3xl font-bold text-white shadow-md shadow-slate-600 transition duration-300 ease-in-out hover:bg-red-500 hover:shadow-lg hover:shadow-slate-700 focus:outline-none capitalize";

export { speechText, ClassName, shuffleArray, getRandomIntInclusive };
