function resetMain() {
  main().innerHTML = ""
}

function resetFormInputs() {
  imageInput().value = ""
  nameInput().value = ""
  descInput().value = ""
  restaurantInput().value = ""
  urlInput().value = ""
  locationInput().value = ""
  categoryInput().value = ""
}

// FORMS
function form() {
  return document.getElementById('form')
}

//LINKS
function formLinkEvent() {
  formLink().addEventListener('click', function (e) {
    e.preventDefault()

    Taco.renderForm()
  })
}

function tacoLinkEvent() {
  tacoLink().addEventListener('click', function (e) {
    e.preventDefault()

    Taco.renderAllTacos()
  })
}

document.addEventListener("DOMContentLoaded", () => {
  Taco.getTacos();
  formLinkEvent();
  tacoLinkEvent();
  // renderAllTacos();

})