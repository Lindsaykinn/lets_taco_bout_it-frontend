class Taco {

  static all = []

  //Instance methods
  // creating the object from the class that is defined based on the parameters given to the constructor
  constructor(attr) {
    this.id = attr.id
    this.name = attr.name
    this.description = attr.description
    this.image = attr.image
    this.likes = attr.likes
    this.location = attr.location
    this.restaurant = attr.restaurant
    this.url = attr.url
    this.category = attr.category
  }

  render() {
    let div = document.createElement('div')
    let h3 = document.createElement('h3')
    let cardBody = document.createElement('div')


    let pImage = document.createElement('img')
    pImage.src = this.image
    pImage.setAttribute('width', 325)
    pImage.setAttribute('height', 250)

    let pDesc = document.createElement('p')
    let pCategory = document.createElement('p')
    let pRestaurant = document.createElement('p')
    let pUrl = document.createElement('a')
    let pLocation = document.createElement('p')
    let deleteLink = document.createElement('a')
    let editLink = document.createElement('a')
    let tacosDiv = document.getElementById('tacos')


    pUrl.setAttribute('href', `${this.url}`)
    pUrl.setAttribute('target', '_blank')

  // an anchor tag has a dataset property
    deleteLink.dataset.id = this.id
    deleteLink.setAttribute('href', "#")
    deleteLink.innerText = 'Delete'
    deleteLink.addEventListener('click', Taco.deleteTaco)

    editLink.dataset.id = this.id
    editLink.addEventListener('click', Taco.editTaco)
    editLink.setAttribute('href', "#")
    editLink.innerText = 'Edit'


    h3.innerText = `${this.name}`
    pImage.innerText = `${this.image}`
    pDesc.innerText = `${this.description}`
    pRestaurant.innerText = `${this.restaurant}`
    pUrl.innerText = `${this.url}`
    pLocation.innerText = `${this.location}`
    pCategory.innerText = `Category: ${this.category.name}`

    div.className = "taco-card"
    cardBody.className = 'card-body'
    pImage.className = 'card-img-top'
    h3.className = 'card-title'
    pDesc.className = 'card-text'   
    pUrl.className = 'url' 
    pRestaurant.className = 'restaurant'
    pLocation.className = 'location'

    div.appendChild(pImage)
    div.appendChild(h3)
    div.appendChild(pDesc)
    div.appendChild(pCategory)
    div.appendChild(pRestaurant)
    div.appendChild(pUrl)
    div.appendChild(pLocation)
    div.appendChild(deleteLink)
    div.appendChild(editLink)

    cardBody.appendChild(div)
    tacosDiv.appendChild(div)
  }

  
  //**STATIC METHODS**//
  // collection is the data from the API response - getting the array of tacos
  static createFromCollection(tacoCollection) {
    tacoCollection.forEach(attr => Taco.create(attr))
  }
  
  static create(attr) {
    // new means to use the constructor and create an object
    let taco = new Taco(attr)
    taco.save()
    return taco
  }

  save() {
    Taco.all.push(this)
  }

  // static save(taco){
  //   Taco.all.push(taco)
  // }
  // Would also need to update the create function from taco.save() to Taco.save(taco)


  static async getTacos() {
    //fetch to rails api, tacos index. grab tacos list, populate main div with all tacos
    const data = await Api.get('/tacos')
    // tacos = data
    Taco.createFromCollection(data)
    Taco.renderAllTacos()
  }

  //TACO TEMPLATES//

  // After taco object exists
  static tacosTemplate() {
    return `
    <h2><u>Tacos</u></h2>
    <div id="tacos" class='tacos'>
    </div>
  `
  }

  static tacoTemplate(){
    return `
    
    `
  }

  static tacoForm() {
    return `
    <div class="row g-2">
    <div class="col-md-6">
    <div class='form-floating'>
    <input type="text" class='form-control' id='image' name='image'>
    <label for="image">Image URL</label>
    </div> 
    </div>
    </div>

    <br>

    <form id="form">
    <div class="row g-2">
    <div class="col-md-6">
    <div class='form-floating'>
    <input type="text" class='form-control' id='name' name="name">
    <label for="name">Taco Name</label>
    </div>
    </div>
    </div>

    <br>    

    <div class="row g-2">
    <div class="col-md-6">
    <div class='form-floating'>
    <textarea name="description" class='form-control' id='description' cols="30" rows="5"></textarea>
    <label for="description">Description</label> <br>
    </div>
    </div>
    </div>

    <br> 

    <div class="row g-2">
    <div class="col-md-4">
    <div class='form-floating'>
    <select class='form-select' id='category' name='category'>
    <option selected>Choose Category</option>
    <option value="Fish">Fish</option>
    <option value="Pork">Pork</option>
    <option value="Beef">Beef</option>
    <option value="Veg">Veg</option>
    </select>
    <label for='floatingSelectGrid'>Taco Category</label>
    </div>
    </div>
    </div>

    <br>
    
    <div class="row g-2">
    <div class="col-md-4">
    <div class='form-floating'>
    <input type="text" class='form-control' id='restaurant' name="restaurant"> 
    <label for="restaurant">Restaurant Name</label> 
    </div>
    </div>

    <div class="col-md-4">
    <div class='form-floating'>
    <input type="url" class='form-control' id='url' name="url">
    <label for="url">Restaurant Website</label>
    </div>
    </div>
    </div>

    <br>

    <div class="row g-2">
    <div class="col-md-6">
    <div class='form-floating'>
    <input type="text" class='form-control' id='location' name='location'>
    <label for="location">City & State</label>
    </div>
    </div>
    </div>
    <br>
    <input class="btn btn-outline-secondary" type="submit" value="Add Taco">
    </form>
    </div>
    `
  }

  static editTacoForm(taco) {
    return `
    <form id="form" data-id="${taco.id}" >
    <div class="row g-2">
    <div class="col-md-6">
    <div class='form-floating'>
    <input type="text" name="image" class='form-control' id='image' value="${taco.image}">
    <label for="image">Image URL</label><br>
    </div> 
    </div>
    </div>

    <br>

    <div class="row g-2">
    <div class="col-md-6">
    <div class='form-floating'>
    <input type="text" name="name" class='form-control' id='name' value="${taco.name}">
    <label for="name">Taco Name</label>
    </div>
    </div>
    </div>

    <br>

    <div class="row g-2">
    <div class="col-md-6">
    <div class='form-floating'>
    <textarea name="description" class='form-control' id='description' cols="30" rows="5">${taco.description}</textarea>
    <label for="description">Description</label> <br>
    </div>
    </div>
    </div>

    <br>

    <div class="row g-2">
    <div class="col-md-4">
    <div class='form-floating'>
    <select class='form-select' id='category' name='category'>
      <option selected>${taco.category.name}</option>
      <option value="Fish">Fish</option>
      <option value="Pork">Pork</option>
      <option value="Beef">Beef</option>
      <option value="Veg">Veg</option>
      </select>
      <label for='floatingSelectGrid'>Taco Category</label>
      </div>
      </div>
      </div>

    <br>

    <div class="row g-2">
    <div class="col-md-4">
    <div class='form-floating'>
    <input type="text" name="restaurant" class='form-control' id='restaurant' value="${taco.restaurant}">  
    <label for="restaurant">Restaurant Name</label> 
    </div>
    </div>

    <div class="col-md-4">
    <div class='form-floating'>
    <input type="url" name="url" class='form-control' id='url' value="${taco.url}">
    <label for="url">Restaurant Website</label>
    </div>
    </div>
    </div>

    <br>

    <div class="row g-2">
    <div class="col-md-6">
    <div class='form-floating'>
    <input type="text" name='location' class='form-control' id='location' value="${taco.location}">
    <label for="location">City & State</label>
    </div>
    </div>
    </div>

    <br>
    <input class="btn btn-outline-secondary" type="submit" value="Update Taco">
    </form>
    </div>`
  }

  //**renders **/
  static renderForm() {
    resetMain();
    // adding form to main div
    main().innerHTML = Taco.tacoForm();
    // putting form in DOM
    form().addEventListener('submit', Taco.submitForm);
  }

  static renderEditForm(taco) {
    resetMain()
    main().innerHTML = Taco.editTacoForm(taco)
    form().addEventListener('submit', Taco.submitEditForm)
  }


  static renderAllTacos() {
    resetMain();
    main().innerHTML = Taco.tacosTemplate();

    Taco.all.forEach(taco => taco.render())
  }

  //Event handlers

  static editTaco(e) {
    e.preventDefault();
    const id = e.target.dataset.id

    const taco = Taco.all.find(function (taco) {
      return taco.id == id;
    })

    Taco.renderEditForm(taco);
  }

  static async deleteTaco(e) {
    e.preventDefault();

    // grabbing target('a') and dataset (what is attached to the 'a') and then the id
    let id = e.target.dataset.id

    // deleted taco
    const deletedTaco = await Api.delete('/tacos/' + id)

    Taco.all = Taco.all.filter(function(taco) {
      return taco.id !== deletedTaco.id
    })
    /*
    in a fat arrow function
    Taco.all = Taco.all.filter(taco => taco.id !== deletedTaco.id); 
    */
    Taco.renderAllTacos();
  }

  static submitForm(e) {
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
    Api.post('/tacos', strongParams)
      .then(function (taco) {
        Taco.create(taco)
        Taco.renderAllTacos();
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
    Taco.renderAllTacos();
  }

  static submitEditForm(e) {
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

    Api.patch("/tacos/" + id, strongParams)
      .then(function (taco) {
        //selects taco out of array
        let t = Taco.all.find((t) => t.id == taco.id)
        //finding the index of the taco found in the above function
        let idx = Taco.all.indexOf(t)
        //update the index value with the newly updated taco
        Taco.all[idx] = new Taco(taco)

        Taco.renderAllTacos();
      })
  }
}