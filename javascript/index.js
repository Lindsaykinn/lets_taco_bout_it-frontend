function resetMain() {
  main().innerHTML = ""
}

async function getTacos() {
  //fetch to rails api, tacos index. grab tacos list, populate main div with all tacos
  const data = await Api.get('/tacos')
      // tacos = data
      Taco.createFromCollection(data)
      Taco.renderAllTacos()
}

function resetFormInputs() {
  nameInput().value = ""
  imageInput().value = ""
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
  getTacos();
  formLinkEvent();
  tacoLinkEvent();
  // renderAllTacos();

})