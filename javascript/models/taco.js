class Taco {

  static all = []

  //Instance methods
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

    deleteLink.dataset.id = this.id
    deleteLink.setAttribute('href', "#")
    deleteLink.innerText = 'Delete'
    deleteLink.addEventListener('click', deleteTaco)

    editLink.dataset.id = this.id
    editLink.addEventListener('click', editTaco)
    editLink.setAttribute('href', "#")
    editLink.innerText = 'Edit'


    h3.innerText = `${this.name}`
    pImage.innerText = `${this.image}`
    pDesc.innerText = `${this.description}`
    pRestaurant.innerText = `${this.restaurant}`
    pUrl.innerText = `${this.url}`
    pLocation.innerText = `${this.location}`
    pCategory.innerText = `Category: ${this.category.name}`

    div.appendChild(h3)
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

  save() {
    Taco.all.push(this)
  }

  //**STATIC METHODS**//

  static renderForm() {
    resetMain();
    // adding form to main div
    main().innerHTML = Taco.tacoForm();
    // putting form in DOM
    form().addEventListener('submit', submitForm);
  }

  static create(attr) {
    let taco = new Taco(attr)
    taco.save()
    return taco
  }

  static createFromCollection(collection) {
    collection.forEach(attr => Taco.create(attr))
  }

  //TACO TEMPLATES//

  // After taco object exists
  static tacosTemplate() {
    return `
  <h2><u>Tacos</u></h2>
  <div id="tacos">
  
  </div>
  `
  }

  static tacoForm() {
    return `
    <form id="form">
    <div class="input-field">
    <label for="name">Taco Name</label>
    <input type="text" name="name" id="name">
    </div> <br>
    <div class="input-field">
    <label for="image">Image URL</label>
    <input type="text" name='image' id="image">
    </div> <br>
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
        </div>
        `
  }

  static renderAllTacos() {
    resetMain();
    main().innerHTML = Taco.tacosTemplate();

    Taco.all.forEach(taco => taco.render())
  }
}