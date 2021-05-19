import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js"

export class HousesController {
  constructor() {
    ProxyState.on('houses', this.drawHouses)
    // this.drawHouses()
  }

  drawHouses() {
    let template = ''

    ProxyState.houses.forEach(house => {
      template += /*html*/ `
        <div class="col-lg-4 listing my-3">
          <div class="card">
            <div>
              <img src="${house.img}" height="200" />
            </div>
              <p>
                <b>${house.bedroom}${house.bathroom} ${house.squareFeet}</b>
              </p>
              <p>
              <em>${house.price}</em>
              </p>
            <div>
            </div>
          </div>
        </div>
        `
    })
    document.getElementById('listings').innerHTML = template
  }

  addHouse(event){
    event.preventDefault()
    console.log(event)
    let form = event.target
    let formData = {
      bedroom: form.bedroom.value,
      bathroom: form.bathroom.value,
      footage: form.footage.value,
      price: form.price.value,
      img: form.img.value,
    }
    console.log(formData)
    housesService.addHouse(formData)
    form.reset()
    this.toggleForm()
  }
  toggleForm(){
    document.getElementById('house-form').classList.toggle('d-none')
}


}