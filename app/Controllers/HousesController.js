import { ProxyState } from "../AppState.js";
import { carsService } from "../Services/CarsService.js";
import { housesService } from "../Services/HousesService.js"

export class HousesController {
  constructor() {
    ProxyState.on('houses', this.drawHouses)
   housesService.getHouses()
  }

  drawHouses() {
    let template = ''
    ProxyState.houses.forEach(house => {
      template += house.cardTemplate
    })
    document.getElementById('listings').innerHTML = template
  }

  addHouse(event){
    event.preventDefault()
    console.log(event)
    let form = event.target
    let formData = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      price: form.price.value,
      year: form.year.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value,
    }
    if(form.houseId.value){
      formData.id = form.houseId.value
      housesService.updateHouse(formData)
    }else{
      housesService.addHouse(formData)
    }
    form.reset()
    this.toggleForm()
  }
// NOTE DELETE: This will send to the house service to delete that info
  deleteHouse(id){
    if(window.confirm('You sure bruh?'))
    housesService.deleteHouse(id)
  }

  editHouse(id){
    let house = ProxyState.houses.find(h => h.id == id)
    console.log('did it find the house', house)
    let form = document.getElementById('house-form')
    form.bedrooms.value = house.bedrooms
    form.bathrooms.value = house.bathrooms
    form.price.value = house.price
    form.year.value = house.year
    form.description.value = house.description
    form.imgUrl.value = house.imgUrl
    form.houseId.value = house.id
  }
  toggleForm(){
    document.getElementById('house-form').classList.toggle('d-none')
}


}