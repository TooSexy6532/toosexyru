document.querySelector('.en_switcher').onclick = showContent
document.querySelector('.ru_switcher').onclick = showContent
const popup = document.querySelector('.modal_dialog')
const popupForm = document.querySelector('.modal_form')
console.log(popup)
console.log(popupForm)
function showContent() {
  if (this.classList.contains('en')) {
    let x = document.querySelectorAll(".en")
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = 'none'
    }
    let y = document.querySelectorAll(".ru")
    for (let i = 0; i < y.length; i++) {
      y[i].style.display = 'block'
    }
    console.log('Переключили на русский')
  } else {
    let z = document.querySelectorAll(".ru")
    for (let i = 0; i < z.length; i++) {
      z[i].style.display = 'none'
    }
    let c = document.querySelectorAll(".en")
    for (let i = 0; i < c.length; i++) {
      c[i].style.display = 'block'
    }
    console.log('Переключили на английский')
  }
}

function openForm() {
  popup.style.display = "block"
  popup.classList.add("visible")
  console.log('Открыл форму')
}

function closeForm() {
  popup.style.display = "none"
  popup.classList.remove("visible")
  console.log('Закрыл форму')
}

//
// document.onclick = function() {
//     popup.classList.contains("visible") ? console.log('Форма открыта, кликнул вне её') : console.log('Форма закрыта');
// }
