const form = document.querySelector(".contacts__rightPart__form");
const inputName = document.getElementById("nameInput");
const inputPhone = document.getElementById("phoneInput");

form.addEventListener("submit", (event) => {
  let error = false;
  event.preventDefault();
  if (inputName.value.length === 0) {
    inputName.ariaInvalid = true;
    inputName.style.borderColor = "red";
    inputName.placeholder = "Введите ваше имя";
    error = true;
  } else if (inputName.value.match(/[\s]|[1-9]/g)) {
    inputName.style.borderColor = "red";
    inputName.placeholder = "Недопустимые символы-пробел|цифры|";
    inputName.value = "";
    error = true;
  } else {
    inputName.style.borderColor = "rgba(242, 242, 242, 0.5)";
    inputName.placeholder = "";
  }
  if (inputPhone.value.length === 0) {
    inputPhone.style.borderColor = "red";
    inputPhone.placeholder = "Введите ваш номер телефона";
    error = true;
  } else if (inputPhone.value.match(/[a-z]|[а-я]|[\s]/gi)) {
    inputPhone.style.borderColor = "red";
    inputPhone.placeholder = "Недопустимые символы-пробел|цифры|буквы";
    inputPhone.value = "";
    error = true;
  } else {
    inputPhone.style.borderColor = "rgba(242, 242, 242, 0.5)";
    inputPhone.placeholder = "";
  }
  if (!error) {
    form.reset();
    alert("Запрос успешно отправлен!");
  }
});

let modalIsOpen = false;

const modal = document.querySelector(".burgerMenuBlock");
const burger = document.querySelector(".burger");
const burgerIcon = document.getElementById("burgerIcon");
burger.addEventListener("click", () => openModal());

function openModal() {
  if (modalIsOpen) {
    modalIsOpen = !modalIsOpen;
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    burgerIcon.src = "/public/burger.svg";
    return null;
  }
  if (!modalIsOpen) {
    modalIsOpen = !modalIsOpen;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    burgerIcon.src = "/public/cross.svg";
    return null;
  }
}

const person = document.querySelector(".person");
const dropdown = document.querySelector(".dropdown");

let mouseIn = false;

person.addEventListener("mouseenter", () => {
  if(window.innerWidth > 400) {
    dropdown.style.display = "block";
    setTimeout(() => {
      if (!mouseIn) {
        dropdown.style.display = "none";
      }
    }, 1500);
  }
});

dropdown.addEventListener("mouseenter", () => {
  mouseIn = true;
});
dropdown.addEventListener("mouseleave", () => {
  mouseIn = false;
  dropdown.style.display = "none";
});

const label1 = document.getElementById('label1')
const label2 = document.getElementById('label2')
const label3 = document.getElementById('label3')
const label4 = document.getElementById('label4')
const label5 = document.getElementById('label5')

label1.style.background = '#292D32'
label1.style.transform = 'scale(1.8)'

label1.addEventListener('click', (event) => {
  event.target.style.background = '#292D32'
  event.target.style.transform = 'scale(1.8)'
  label2.style.background = '#d0d0d0'
  label2.style.transform = 'scale(1)'
  label3.style.background = '#d0d0d0'
  label3.style.transform = 'scale(1)'
  label4.style.background = '#d0d0d0'
  label4.style.transform = 'scale(1)'
  label5.style.background = '#d0d0d0'
  label5.style.transform = 'scale(1)'
})
label2.addEventListener('click', (event) => {
  event.target.style.background = '#292D32'
  event.target.style.transform = 'scale(1.8)'
  label1.style.background = '#d0d0d0'
  label1.style.transform = 'scale(1)'
  label3.style.background = '#d0d0d0'
  label3.style.transform = 'scale(1)'
  label4.style.background = '#d0d0d0'
  label4.style.transform = 'scale(1)'
  label5.style.background = '#d0d0d0'
  label5.style.transform = 'scale(1)'
})
label3.addEventListener('click', (event) => {
  event.target.style.background = '#292D32'
  event.target.style.transform = 'scale(1.8)'
  label1.style.background = '#d0d0d0'
  label1.style.transform = 'scale(1)'
  label2.style.background = '#d0d0d0'
  label2.style.transform = 'scale(1)'
  label4.style.background = '#d0d0d0'
  label4.style.transform = 'scale(1)'
  label5.style.background = '#d0d0d0'
  label5.style.transform = 'scale(1)'
})
label4.addEventListener('click', (event) => {
  event.target.style.background = '#292D32'
  event.target.style.transform = 'scale(1.8)'
  label1.style.background = '#d0d0d0'
  label1.style.transform = 'scale(1)'
  label2.style.background = '#d0d0d0'
  label2.style.transform = 'scale(1)'
  label3.style.background = '#d0d0d0'
  label3.style.transform = 'scale(1)'
  label5.style.background = '#d0d0d0'
  label5.style.transform = 'scale(1)'
})
label5.addEventListener('click', (event) => {
  event.target.style.background = '#292D32'
  event.target.style.transform = 'scale(1.8)'
  label1.style.background = '#d0d0d0'
  label1.style.transform = 'scale(1)'
  label2.style.background = '#d0d0d0'
  label2.style.transform = 'scale(1)'
  label3.style.background = '#d0d0d0'
  label3.style.transform = 'scale(1)'
  label4.style.background = '#d0d0d0'
  label4.style.transform = 'scale(1)'
})

