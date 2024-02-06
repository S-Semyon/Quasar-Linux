var is_hide = true;
const elem = document.getElementById('navbarSupportedContent')

function handleShowClass() {
  if (is_hide) {
    is_hide = false
    console.log(1)
    document.body.style.overflow = 'hidden';
  } else {
    is_hide = true
    console.log(2)
    document.body.style.overflow = '';
  }
}

const button = document.getElementById("nb-toggle");
button.addEventListener("click", handleShowClass);