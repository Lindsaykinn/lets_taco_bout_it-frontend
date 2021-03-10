class Api {
  static baseUrl = "http://localhost:3000"

  static headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }

  //will parse json with all get requests
  static async get(path){
    let resp = await fetch(Api.baseUrl + path, {
      method: 'GET',
      headers: Api.headers
    })
    let data = await resp.json()

    return data
  }
}