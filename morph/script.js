const morseCodeMap = {
  'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',
  'F': '..-.',  'G': '--.',   'H': '....',  'I': '..',    'J': '.---',
  'K': '-.-',   'L': '.-..',  'M': '--',    'N': '-.',    'O': '---',
  'P': '.--.',  'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
  'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',  'Y': '-.--',
  'Z': '--..',
  '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
  '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
  ' ': '/'
};

const reverseMorseCodeMap = Object.fromEntries(
  Object.entries(morseCodeMap).map(([k, v]) => [v, k])
);

function textToMorse() {
  const input = document.getElementById("inputText").value.toUpperCase();
  const output = input.split('').map(char => morseCodeMap[char] || '').join(' ');
  document.getElementById("outputText").value = output;
}

function morseToText() {
  const input = document.getElementById("inputText").value.trim();
  const output = input.split(' ').map(code => reverseMorseCodeMap[code] || '').join('');
  document.getElementById("outputText").value = output;
}

function copyText() {
  const output = document.getElementById("outputText");
  if (output.value.trim() === "") {
    alert("Nothing to copy!");
    return;
  }
  navigator.clipboard.writeText(output.value)
    .then(() => alert("Copied to clipboard!"))
    .catch(err => {
      alert("Failed to copy!");
      console.error(err);
    });
}

function pasteText() {
  navigator.clipboard.readText()
    .then(text => {
      document.getElementById("inputText").value = text;
    })
    .catch(err => {
      alert("Failed to paste. Clipboard permissions may be blocked.");
      console.error(err);
    });
}
