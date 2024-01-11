// Sample translations
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}

// Function to load supported languages into the select dropdown
function loadLanguages() {
  const languageSelect = document.getElementById("language-select");

  // Fetch supported languages from the Google Translate API
  fetch(
    "https://translation.googleapis.com/language/translate/v2/languages?key=AIzaSyCkFHbglJneGX4zmYzi6szP7PjxfKkS61Y"
  )
    .then((response) => response.json())
    .then((data) => {
      const languages = data.data.languages;

      // Add each language to the select dropdown
      languages.forEach((language) => {
        const option = document.createElement("option");
        option.value = language.language;
        option.innerHTML = language.name;
        languageSelect.appendChild(option);
      });
    })
    .catch((error) => console.log(error));
}

// Function to translate the page content
function translateContent() {
  const selectedLanguage = document.getElementById("language-select").value;

  // Fetch translation from the Google Translate API
  fetch(
    `https://translation.googleapis.com/language/translate/v2?key=AIzaSyCkFHbglJneGX4zmYzi6szP7PjxfKkS61Y&q=Hello%20World!&target=${selectedLanguage}`
  )
    .then((response) => response.json())
    .then((data) => {
      const translatedText = data.data.translations[0].translatedText;

      // Update the content with translated text
      document.querySelector("h1").innerHTML = translatedText;
      document.querySelector("p").innerHTML = translatedText;
    })
    .catch((error) => console.log(error));
}

// Load supported languages and set up event listener for translation
window.onload = function () {
  loadLanguages();

  const translateButton = document.getElementById("translate-button");
  translateButton.addEventListener("click", translateContent);
};




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

function navigateTo(page) {
  window.location.href = `${page}.html`;
}
