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


document.addEventListener('DOMContentLoaded', function () {
  const modeToggleBtn = document.getElementById('modeToggle');
  const body = document.body;

  // Check user's preference from previous visits
  if (localStorage.getItem('darkMode') === 'enabled') {
      enableDarkMode();
  }

  // Toggle between dark and light mode
  modeToggleBtn.addEventListener('click', function () {
      if (body.classList.contains('dark-mode')) {
          disableDarkMode();
      } else {
          enableDarkMode();
      }
  });

  // Function to enable dark mode
  function enableDarkMode() {
      body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
  }

  // Function to disable dark mode
  function disableDarkMode() {
      body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', null);
  }
});
