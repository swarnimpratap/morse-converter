const morseDict = {
  A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.',
  G: '--.', H: '....', I: '..', J: '.---', K: '-.-', L: '.-..',
  M: '--', N: '-.', O: '---', P: '.--.', Q: '--.-', R: '.-.',
  S: '...', T: '-', U: '..-', V: '...-', W: '.--', X: '-..-',
  Y: '-.--', Z: '--..',
  '0': '-----', '1': '.----', '2': '..---', '3': '...--',
  '4': '....-', '5': '.....', '6': '-....', '7': '--...',
  '8': '---..', '9': '----.', ' ': '/'
};

const reverseDict = Object.entries(morseDict).reduce((acc, [k, v]) => {
  acc[v] = k;
  return acc;
}, {});

function textToMorse() {
  const input = document.getElementById('inputText').value.toUpperCase();
  const output = input.split('').map(char => morseDict[char] || '').join(' ');
  document.getElementById('outputText').value = output;
}

function morseToText() {
  const input = document.getElementById('inputText').value.trim();
  const output = input.split(' ').map(code => reverseDict[code] || '').join('');
  document.getElementById('outputText').value = output;
}
