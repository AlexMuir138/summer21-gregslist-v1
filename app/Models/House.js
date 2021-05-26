export class House{
  constructor({id, bedrooms, bathrooms, price, year, description, imgUrl}){
    this.id = id
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.price = price
    this.year = year
    this.description = description
    this.imgUrl = imgUrl
  }

get cardTemplate(){
  return /*html*/ `
  <div class="col-lg-4 listing my-3">
    <div class="card">
      <div>
        <img src="${this.imgUrl}" height="200" />
          </div class="d-flex justify-content-center">
            <p>
              <b>Bedrooms:${this.bedrooms}</b>
              </p>
              <p>
              <b>Bathrooms:${this.bathrooms}</b>
              </p>
              <p>
              <b>Year built:${this.year}</b>
              </p>
              <p>
              <b>Description:${this.description}</b>
              </p>
            <p>
            <em>$${this.price.toFixed(2)}</em>
            </p>
            <button class="btn btn-primary btn-block" onclick="app.housesController.editHouse('${this.id}')">EDIT HOUSE</button>
              <button class="btn btn-secondary btn-block" onclick="app.housesController.deleteHouse('${this.id}')">DELETE HOUSE</button>
          <div>
      </div>
    </div>
  </div>
  `
}
  
}

// REVIEW Delete/Edit
// FIXME
// TODO
// NOTE