// @ts-ignore
const { Typed } = window;

const typed2 = new Typed("#strike", {
  strings: [
    "hello",
    "hi",
    "hey",
    "g'day",
    "bonjour",
    "yo",
    "hola",
    "morning!",
    "hallo",
    "ciao",
    "&#128075;",
    "namaste",
    "hoi",
    "m'athchomaroon",
    "hiya",
    "Привет",
    "you got a sec?",
    "مرحبا",
    "greetings!",
    "aloha",
    "こんにちは",
    "buenos dias",
    "nuqneH",
    "heya",
    "olà",
    "apipoulaï",
    "j0",
    "howdy",
    "שלום",
    "yooooooooooo!",
    "你好",
    "在吗？",
    "you there?",
    "fraeslis",
    "여보세요",
    "sul sul",
    "quick question...",
    "achuta",
    "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
    "ping",
    "Χαίρετε",
    "سلام",
  ],
  typeSpeed: 80,
  backSpeed: 60,
  smartBackspace: true,
  loop: true,
  shuffle: false,
  backDelay: 2000,
  startDelay: 3000,
});

// force the start of cursor animation while the `startDelay` is ticking
if (typed2.cursor != null) {
  // can't use `toggleBlinking(true)` here, as it has some extra checks
  // whether animation has started...which defeats the purpose
  typed2.cursor.classList.add("typed-cursor--blink");
}


// STOP PEOPLE FROM STEALING
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};