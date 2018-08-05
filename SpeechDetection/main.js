window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;	// Chrome supports speech recognition with prefixed properties. Firefox and other non-prefix browsers

  const recognition = new SpeechRecognition();	// create Speech Recognition
  recognition.interimResults = true;	// whether interim results should be returned
  recognition.lang = 'en-US';	// set the current SpeechRecognition language
  
  let p = document.createElement('p');	// create paragraph
  const words = document.querySelector('.words');	// returns the first element with class="words"
  words.appendChild(p);	// adds a node "p", whitch was created above, after the found element and assigned to varible words. 

  recognition.addEventListener('result', e => {	// use  callback to process the results
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');

      p.textContent = transcript;

      if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
      }
  });

  recognition.addEventListener('end', recognition.start);

  recognition.start(); // launches speech recognition