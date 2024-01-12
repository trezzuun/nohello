const profilLogo = document.querySelectorAll(".profil-logo");
const roleAdd = document.querySelectorAll(".role-add");
const input = document.querySelectorAll(".message input");
const modal = document.querySelector(".modal-container");
const helpBtn = document.querySelector(".help-btn");
const feedbackInput = document.querySelector("#feedback-input");

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

// You can customize the error code and message
const errorCode = 404;
const errorMessage = "Page Not Found";

// Display error information on the 404 page
document.addEventListener("DOMContentLoaded", function () {
    const errorCodeElement = document.querySelector(".error-code");
    const errorMessageElement = document.querySelector(".error-message");

    errorCodeElement.textContent = errorCode;
    errorMessageElement.textContent = errorMessage;
});

// You can add more functionality, such as redirecting to the home page
document.querySelector(".back-home").addEventListener("click", function () {
    window.location.href = "index.html";
});