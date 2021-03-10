class Taco{

  static all = []

  constructor(attr){
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

  static create(attr){
    let taco = new Taco(attr)
    taco.save()
    return taco
  }

  save(){
    Taco.all.push(this)
  }

  static createFromCollection(collection){
    collection.forEach(attr => Taco.create(attr))
  }

  static renderAllTacos() {
    resetMain();
    main().innerHTML = tacosTemplate();
  
    Taco.all.forEach(function (taco) {
      renderOneTaco(taco);
    })
  }

}

