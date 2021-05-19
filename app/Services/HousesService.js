import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";

class HousesService{
  addHouse(formData){
    let newHouse = new House(formData.bedroom, formData.bathroom, formData.squareFeet, formData.price, formData.img)
    ProxyState.houses = [newHouse, ...ProxyState.houses]
    
  }
}

export const housesService = new HousesService()