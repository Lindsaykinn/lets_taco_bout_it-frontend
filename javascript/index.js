let tacos = []

baseUrl = "http://localhost:3000"

// MAIN DIVs
function main() {
  return document.getElementById('main')
}

function resetMain() {
  main().innerHTML = ""
}

// INPUTS (DOM Getters)
function nameInput() {
  return document.getElementById('name')
}

function imageInput() {
  return document.getElementById('image')
}

function descInput() {
  return document.getElementById('description')
}

function restaurantInput() {
  return document.getElementById('restaurant')
}

function urlInput() {
  return document.getElementById('url')
}

function locationInput() {
  return document.getElementById('location')
}

function categoryInput(){
  return document.getElementById('category')
}

function formLink() {
  return document.getElementById('form-link')
}

function tacoLink() {
  return document.getElementById('taco-link')
}

function getTacos() {
  //fetch to rails api, tacos index. grab tacos list, populate main div with all tacos
  fetch(baseUrl + '/tacos')
    .then(resp => resp.json())
    .then(function (data) {
      tacos = data

      renderAllTacos()
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
function tacoForm() {
  return `
  <form id="form">
  <div class="input-field">
  <label for="name">Taco Name</label>
  <input type="text" name="name" id="name">
  </div>
  <div class="input-field">
  <label for="image"></label><br>
  <input type="text" name='image' id="image">
  </div>
  <div class="input-field">
  <label for="description">Description</label> <br>
  <textarea name="description" id="description" cols="30" rows="5"></textarea>
  </div>
  <div>
  <select id='category' name='category'>
    <option>Taco Category</option>
    <option value="Fish">Fish</option>
    <option value="Pork">Pork</option>
    <option value="Beef">Beef</option>
    <option value="Veg">Veg</option>
  </select>
  </div>
  <br>
  <div class="input-field">
  <label for="restaurant">Restaurant Name</label> 
  <input type="text" name="restaurant" id="restaurant"> -- 
  <label for="url">Restaurant Website</label>
  <input type="url" name="url" id="url">
      </div>
      <br>
      <div class='input-field'>
      <label for="location">City & State</label>
      <input type="text" name='location' id='location'>
      </div>
      <br>
      <input type="submit" value="Add Taco">
      </form>
      </div>`
}

function editTacoForm(taco) {
  return `
  <form id="form" data-id="${taco.id}">
  <div class="input-field">
  <label for="name">Taco Name</label>
  <input type="text" name="name" id="name" value="${taco.name}"/>
  </div>
  <div class="input-field">
  <label for="image"></label><br>
  <img src="${taco.image}" name='image' id="image" width=250 height=250>
  </div>
  <div class="input-field">
  <label for="description">Description</label> <br>
  <textarea name="description" id="description" cols="30" rows="5">${taco.description}</textarea>
  </div>
  <div>
  <select id='category' name='category' >
    <option value="${taco.category.name}">Taco Category</option>
    <option value="Fish">Fish</option>
    <option value="Pork">Pork</option>
    <option value="Beef">Beef</option>
    <option value="Veg">Veg</option>
  </select>
  </div>
  <br>
  <div class="input-field">
  <label for="restaurant">Restaurant Name</label> 
  <input type="text" name="restaurant" id="restaurant" value="${taco.restaurant}"> -- 
  <label for="url">Restaurant Website</label>
  <input type="url" name="url" id="url" value="${taco.url}">
      </div>
      <br>
      <div class='input-field'>
      <label for="location">City & State</label>
      <input type="text" name='location' id='location' value="${taco.location}">
      </div>
      <br>
      <input type="submit" value="Edit Taco">
      </form>
      </div>`
}

function form() {
  return document.getElementById('form')
}

function renderForm() {
  resetMain();
  // adding form to main div
  main().innerHTML = tacoForm();
  // putting form in DOM
  form().addEventListener('submit', submitForm);
}

function renderEditForm(taco){
  resetMain()
  main().innerHTML = editTacoForm(taco)
  form().addEventListener('submit', submitEditForm)
}

function submitForm(e) {
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

  //send data to the backend via a post request
  fetch(baseUrl + '/tacos', {
    body: JSON.stringify(strongParams),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }, 
    method: 'POST'
  })
  .then(function(resp){
    return resp.json()
  })
  .then(function(taco){
    tacos.push(taco)
    renderAllTacos();
  })

  //creating a taco object
  // tacos.push({
  //   name: nameInput().value,
  //   image: imageInput().value,
  //   description: descInput().value,
  //   restaurant: restaurantInput().value,
  //   url: urlInput().value,
  //   location: locationInput().value
  // })

  renderAllTacos();
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
    let t = tacos.find(function(t){
      return t.id == taco.id
    })
    //finding the index of the taco found in the above function
    let idx = tacos.indexOf(t)
    //update the index value with the newly updated taco
    tacos[idx] = taco

    renderAllTacos();
  })
}

// After taco object exists
function tacosTemplate() {
  return `
  <h2><u>Tacos</u></h2>
  <div id="tacos">
  
  </div>
  `
}

function renderOneTaco(taco) {
  let div = document.createElement('div')
  let h4 = document.createElement('h4')
  let pImage = document.createElement('img')
  pImage.src = taco.image
  pImage.setAttribute('width', 250)
  pImage.setAttribute('height', 250)
  let pDesc = document.createElement('p')
  let pCategory = document.createElement('p')
  let pRestaurant = document.createElement('p')
  let pUrl = document.createElement('a')
  let pLocation = document.createElement('p')
  let deleteLink = document.createElement('a')
  let editLink = document.createElement('a')
  let tacosDiv = document.getElementById('tacos')

  pUrl.setAttribute('href', `${taco.url}`)

  

  deleteLink.dataset.id = taco.id
  deleteLink.setAttribute('href', "#")
  deleteLink.innerText = 'Delete'
  deleteLink.addEventListener('click', deleteTaco)

  editLink.dataset.id = taco.id
  editLink.addEventListener('click', editTaco)
  editLink.setAttribute('href', "#")
  editLink.innerText = 'Edit'


  h4.innerText = `${taco.name}`
  pImage.innerText = `${taco.image}`
  pDesc.innerText = `${taco.description}`
  pRestaurant.innerText = `${taco.restaurant}`
  pUrl.innerText = `${taco.url}`
  pLocation.innerText = `${taco.location}`
  pCategory.innerText = `Category: ${taco.category.name}`

  div.appendChild(h4)
  div.appendChild(pImage)
  div.appendChild(pDesc)
  div.appendChild(pCategory)
  div.appendChild(pRestaurant)
  div.appendChild(pUrl)
  div.appendChild(pLocation)
  div.appendChild(deleteLink)  
  div.appendChild(editLink)

  tacosDiv.appendChild(div)
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
    tacos = tacos.filter(function(taco){
      return taco.id !== data.id
    })
    renderAllTacos();
  })
}

function editTaco(e){
  e.preventDefault();
  const id = e.target.dataset.id

  const taco = tacos.find(function(taco){
    return taco.id == id;
  })

  renderEditForm(taco);
}


function renderAllTacos() {
  resetMain();
  main().innerHTML = tacosTemplate();

  tacos.forEach(function (taco) {
    renderOneTaco(taco);
  })
}

//LINKS
function formLinkEvent() {
  formLink().addEventListener('click', function (e) {
    e.preventDefault()

    renderForm()
  })
}

function tacoLinkEvent() {
  tacoLink().addEventListener('click', function (e) {
    e.preventDefault()

    renderAllTacos()
  })
}
document.addEventListener("DOMContentLoaded", () => {
  getTacos();
  formLinkEvent();
  tacoLinkEvent();
  // renderAllTacos();

})