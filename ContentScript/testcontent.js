
//Analyzes input text after break in typing
const debounce = (callback, wait) => {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
};

//Function that checks for forbidden words
function containsForbiddenWords(value) {
  return forbiddenWords.some(word => value.toLowerCase().includes(word.toLowerCase()));
}

//Updates the input box of the webpage
function updateUI(target) {
  const containsForbiddenWord = containsForbiddenWords(target.value);
  const sendButton = target.nextElementSibling;
  const parentDiv = target.parentElement;

  if (containsForbiddenWord) {
    console.log("Detected!")
    sendButton.disabled = true;
    parentDiv.classList.add('forbidden-div');
  } else {
    sendButton.disabled = false;
    parentDiv.classList.remove('forbidden-div');
  }
}

document.body.addEventListener('keyup', debounce((event) => {
  if (event.target.id === 'prompt-textarea') updateUI(event.target);
}, 300));

//Prevents text field containing forbidden word from executing
document.addEventListener('keydown', (e) => {
  if (e.target.id === 'prompt-textarea' && e.key === 'Enter') {
    if (containsForbiddenWords(e.target.value)) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
}, true);