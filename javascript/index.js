
function resetMain() {
  main().innerHTML = ""
}

function getTacos() {
  //fetch to rails api, tacos index. grab tacos list, populate main div with all tacos
  fetch(baseUrl + '/tacos')
    .then(resp => resp.json())
    .then(function (data) {
      // tacos = data
      Taco.createFromCollection(data)
      Taco.renderAllTacos()
    })
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



function renderEditForm(taco){
  resetMain()
  main().innerHTML = editTacoForm(taco)
  form().addEventListener('submit', submitEditForm)
}



function submitEditForm(e){
  e.preventDefault();
  let strongParams = {
    taco: {
      name: nameInput().value,
      image: imageInput().value,
      description: descInput().value,
      restaurant: restaurantInput().value,
      url: urlInput().value,
      location: locationInput().value,
      category_attributes: categoryInput().value
    }
  }
  const id = e.target.dataset.id

  fetch(baseUrl + "/tacos/" + id, {
    method: "PATCH",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(strongParams)
  })
  .then(function(resp){
    return resp.json();
  })
  .then(function(taco){
    //selects taco out of array
    let t = Taco.all.find(function(t){
      return t.id == taco.id
    })
    //finding the index of the taco found in the above function
    let idx = Taco.all.indexOf(t)
    //update the index value with the newly updated taco
    Taco.all[idx] = taco

    Taco.renderAllTacos();
  })
}



function deleteTaco(e){
  e.preventDefault();

  // grabbing target('a') and dataset (what is attached to the 'a') and then the id
  let id = e.target.dataset.id

  fetch(baseUrl + '/tacos/' + id, {
    method: 'DELETE'
  })
  .then(function(resp){
    return resp.json();
  })
  .then(function(data){
    Taco.all = Taco.all.filter(function(taco){
      return taco.id !== data.id
    })
    Taco.renderAllTacos();
  })
}

function editTaco(e){
  e.preventDefault();
  const id = e.target.dataset.id

  const taco = Taco.all.find(function(taco){
    return taco.id == id;
  })

  renderEditForm(taco);
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