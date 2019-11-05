var modal_open = document.querySelector(".address-button");
var popup = document.querySelector(".modal");
var modal_close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var user_name = popup.querySelector("[name=name]");
var user_email = popup.querySelector("[name=email]");
var user_text = popup.querySelector("[name=text]");
var isStorageSupport = true;
var storage_name = "";
var storage_email = "";
  
try {
  storage_name = localStorage.getItem("user_name");
  storage_email = localStorage.getItem("user_email");
} catch (err) {
  isStorageSupport = false;
}

modal_open.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage_email) {
      user_email.value = storage_email;            
      if (storage_name){
        user_name.value = storage_name;
      }
      user_text.focus();
    } else {
      user_name.focus();
    }
  });

modal_close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    form.classList.remove("modal-error");
  });

form.addEventListener("submit", function (evt) {
    if (!user_email.value || !user_text.value) {
      evt.preventDefault();
      form.classList.remove("modal-error");
      form.offsetWidth = popup.offsetWidth;
      form.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("user_name", user_name.value);
        localStorage.setItem("user_email", user_email.value);
      }
    }
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        form.classList.remove("modal-error");
      }
    }
  });