onload = function () {
  if ("speechSynthesis" in window)
    with (speechSynthesis) {
      const playButton = document.querySelector("#play");
      const pauseButton = document.querySelector("#pause");
      const stopButton = document.querySelector("#stop");
      const flag = false;
      // var language = (utter.lang = "nl-NL");
      const myLang = speechSynthesisUtteranceInstance.lang;
      speechSynthesisUtteranceInstance.lang = "nl-NL";

      playButton.addEventListener("click", onClickPlay);
      pauseButton.addEventListener("click", onClickPause);
      stopButton.addEventListener("click", onClickStop);

      function onClickPlay() {
        if (!flag) {
          flag = true;
          utterance = new SpeechSynthesisUtterance(
            document.querySelector("article").textContent
          );
          utterance.voice = getVoices()[0];
          utterance.onend = function () {
            flag = false;
            playButton.className = pauseButton.className = "";
            stopButton.className = "stopped";
          };
          playButton.className = "played";
          stopButton.className = "";
          speak(utterance);
        }
        if (paused) {
          /* unpause/resume narration */
          playButton.className = "played";
          pauseButton.className = "";
          resume();
        }
      }

      function onClickPause() {
        if (speaking && !paused) {
          /* pause narration */
          pauseButton.className = "paused";
          playButton.className = "";
          pause();
        }
      }

      function onClickStop() {
        if (speaking) {
          /* stop narration */
          /* for safari */
          stopButton.className = "stopped";
          playButton.className = pauseButton.className = "";
          flag = false;
          cancel();
        }
      }
    }
  else {
    /* speech synthesis not supported */
    msg = document.createElement("h5");
    msg.textContent = "Speech Synthesis is not supported";
    msg.style.textAlign = "center";
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
    msg.style.marginTop = msg.style.marginBottom = 0;
    document.body.insertBefore(msg, document.querySelector("div"));
  }
};
