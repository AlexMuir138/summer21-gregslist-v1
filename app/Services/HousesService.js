import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";

let url = 'https://bcw-sandbox.herokuapp.com/api/houses/'


class HousesService{

  // NOTE This function seemse to make sense but I think I would like more clarification
  async updateHouse(formData){
    //@ts-ignore
    let res = await axios.put(url + formData.id, formData)

    let indexOfHouseToBeUpdated = ProxyState.houses.findIndex(h => h.id == formData.id)
    ProxyState.houses.splice(indexOfHouseToBeUpdated,1, new House(res.data))
    ProxyState.houses = ProxyState.houses
  }

  // NOTE Not 100% sure how this function works. Might need some clarification.
  async deleteHouse(id){
    await axios.delete(url + id)
    ProxyState.houses = ProxyState.houses.filter(h => h.id != id)
  }

  async getHouses(){
    //@ts-ignore
    let res = await axios.get(url)
    console.log(res)
    ProxyState.houses = res.data.map(h => new House(h))

  }
  async addHouse(formData){
    //@ts-ignore
    formData.levels = 1
    let res = await axios.post(url, formData)
    let newHouse = new House(res.data)
    ProxyState.houses = [newHouse, ...ProxyState.houses]
    
    
  }
}

export const housesService = new HousesService()