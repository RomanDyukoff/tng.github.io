const modalAge = [...window.document.querySelectorAll(".univers__modal")];
const container = [...window.document.querySelectorAll(".age-container")];
const windowModal = window.document.querySelector(".cookies-mw__EN");
const radio = window.document.querySelectorAll(".custom-radio");
const title = window.document.querySelectorAll(".item-EN__color");
const cookies__container = [
  ...window.document.querySelectorAll(".cookies__EN"),
];
const containerEn = [
  ...window.document.querySelectorAll(".univers__container"),
];



window.addEventListener("DOMContentLoaded", () => {
  modalAge[0].classList.remove("univers__hidden");
  window.document.body.style.overflow = "hidden";
});

const handleMoreEn = () => {
  cookies__container.forEach((el) =>
    el.classList.contains("cookies-preferences")
      ? el.classList.remove("cookies-preferences")
      : el.classList.add("cookies-preferences")
  );
  window.document.body.style.overflow = "hidden";
  containerEn[2].classList.add("cookies-preferences-mw");
  windowModal.style.maxWidth = "90%";
};
const handleOK = () => {
  modalAge.forEach((el) =>
    el.classList.contains("cookies__hidden")
      ? el.classList.remove("cookies__hidden")
      : el.classList.add("univers__hidden")
  );
  window.document.body.style.overflow = "auto";
};
const handleNot = () => {
  container.forEach((el) =>
    el.classList.contains("isNot")
      ? el.classList.remove("isNot")
      : el.classList.add("isNot")
  );
};
title[0].style.color = "#454545";
radio.forEach((el, i) =>
  el.addEventListener("click", () => {
    if (el.checked) {
      title[i - 1].style.color = "#454545";
    } else {
      title[i - 1].style.color = "#dfdfdf";
    }
  })
);
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll(".tel"), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___)-___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }
      var reg = matrix
        .substr(0, this.value.length)
        .replace(/_+/g, function (a) {
          return "\\d{1," + a.length + "}";
        })
        .replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (
        !reg.test(this.value) ||
        this.value.length < 5 ||
        (keyCode > 47 && keyCode < 58)
      )
        this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = "";
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});