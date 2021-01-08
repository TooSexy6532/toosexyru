document.querySelector('.en_switcher').onclick = showContent
document.querySelector('.ru_switcher').onclick = showContent

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
  document.querySelector('.modal_dialog').style.display = "block"
  console.log('Открыл форму')
}

function closeForm() {
  document.querySelector('.modal_dialog').style.display = "none";
  console.log('Закрыл форму')
}
