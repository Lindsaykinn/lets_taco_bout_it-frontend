const tacos = [
  {name: "Asada Zing Taco",
	  image: "",
    description: "Bulgogi (Korean) marinated steak topped with shiitake mushrooms, lettuce, soy sesame vinaigrette and sesame seeds",
    restaurant: "Taqueria Tsunami",
    url: "https://taqueriatsunami.com/",
    location: "Marietta, GA"    
  },
  {name: "Pacific Rim Taco",
	  image: "",
    description: "Grilled chili crusted Mahi topped with lettuce, pico de gallo and hoisin lime aioli",
    restaurant: "Taqueria Tsunami",
    url: "https://taqueriatsunami.com/",
    location: "Marietta, GA"    
  },
  {name: "tuna tatako",
	  image: "",
    description: "ancho-crusted tuna, asian slaw, thai basil vinaigrette, soy glaze, lettuce shell (served chilled). topped with: toasted sesame seeds",
    restaurant: "bartaco",
    url: "https://bartaco.com/",
    location: "Atlanta, GA"    
  },

]
// WHEN PAGE IS LOADED
document.addEventListener("DOMContentLoaded", () => {
  renderAllTacos();
  formLinkEvent();
  tacoLinkEvent();
  // renderAllTacos();

})

// MAIN DIVs
function main(){
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

function formLink(){
  return document.getElementById('form-link')
}

function tacoLink(){
  return document.getElementById('taco-link')
}

function resetFormInputs() {
  nameInput().value = ""
  imageInput().value = ""
  descInput().value = ""
  restaurantInput().value = ""
  urlInput().value = ""
  locationInput().value = ""
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
        <input type="text" name='image' id="image" >
      </div>
      <div class="input-field">
        <label for="description">Description</label> <br>
        <textarea name="description" id="description" cols="30" rows="5"></textarea>
      </div>
      <br>
      <div class="input-field">
        <label for="restaurant">Restaurant Name</label> 
        <input type="text" name="restaurant" id="restaurant"> -- 
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
  resetMain();
  // adding form to main div
  main().innerHTML = tacoForm();
  // putting form in DOM
  form().addEventListener('submit', submitForm);
}

function submitForm(e) {
  e.preventDefault();

  //creating a taco object
  tacos.push({
    name: nameInput().value,
    image: imageInput().value,
    description: descInput().value,
    restaurant: restaurantInput().value,
    url: urlInput().value,
    location: locationInput().value
  })

  renderAllTacos();
}

// After taco object exists
function tacosTemplate(){
  return `
  <h2><u>Tacos</u></h2>
    <div id="tacos">
      
      </div>
  `
}

function renderOneTaco(taco){
  let div = document.createElement('div')
  let h4 = document.createElement('h4')
  let pImage = document.createElement('p')
  let pDesc = document.createElement('p')
  let pRestaurant = document.createElement('p')
  let pUrl = document.createElement('p')
  let pLocation = document.createElement('p')
  let tacosDiv = document.getElementById('tacos')

  h4.innerText = taco.name
  pImage.innerText = taco.image
  pDesc.innerText = taco.description
  pRestaurant.innerText = taco.restaurant
  pUrl.innerText = taco.url
  pLocation.innerText = taco.location

  div.appendChild(h4)
  div.appendChild(pImage)
  div.appendChild(pDesc)
  div.appendChild(pRestaurant)
  div.appendChild(pUrl)
  div.appendChild(pLocation)

  tacosDiv.appendChild(div)
}


function renderAllTacos(){
  resetMain();
  main().innerHTML = tacosTemplate();

  tacos.forEach(function(taco){
    renderOneTaco(taco);
  })
}

//LINKS
function formLinkEvent(){
  formLink().addEventListener('click', function(e){
    e.preventDefault()

    renderForm()
  })
}

function tacoLinkEvent(){
  tacoLink().addEventListener('click', function(e){
    e.preventDefault()

    renderAllTacos()
  })
}