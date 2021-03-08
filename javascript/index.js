const tacos = []
// WHEN PAGE IS LOADED
document.addEventListener("DOMContentLoaded", () => {
  renderForm();

})

// MAIN DIV
function getMain() {
  return document.getElementById('main')
}

function resetMain() {
  getMain().innerHTML = ""
}

// INPUTS
function nameInput() {
  return document.getElementById('name')
}

function imageInput() {
  return document.getElementById('image-url')
}

function descInput() {
  return document.getElementById('description')
}

function restaurantInput() {
  return document.getElementById('restaurant-name')
}

function urlInput() {
  return document.getElementById('url')
}

function locationInput() {
  return document.getElementById('location')
}

function resetFormInputs() {
  nameInput().innerHTML = ""
  imageInput().innerHTML = ""
  descInput().innerHTML = ""
  restaurantInput().innerHTML = ""
  urlInput().innerHTML = ""
  locationInput().innerHTML = ""
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
        <label for="image-url"></label><br>
        <input type="text" name='image-url' id="image-url" >
      </div>
      <div class="input-field">
        <label for="description">Description</label> <br>
        <textarea name="description" id="description" cols="30" rows="5"></textarea>
      </div>
      <br>
      <div class="input-field">
        <label for="restaurant-name">Restaurant Name</label> 
        <input type="text" name="restaurant-name" id="restaurant-name"> -- 
        <label for="url">Restaurant Website</label>
        <input type="text" name="url" id="url">
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

function form() {
  return document.getElementById('form')
}

function renderForm() {
  // resetMain();
  // adding form to main div
  getMain().innerHTML = tacoForm();
  // putting form in DOM
  form().addEventListener('submit', submitForm);
}

function submitForm(e) {
  e.preventDefault();

  //creating a taco object
  tacos.push({
    name: nameInput().innerText,
    image: imageInput().innerText,
    description: descInput().innerText,
    restaurant: restaurantInput().innerText,
    url: urlInput().innerText,
    location: locationInput().innerText
  })
}