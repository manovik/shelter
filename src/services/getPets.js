class GetPets {
  _url = "http://localhost:3300/pets";

  async getResource(url) {
    const res = await fetch(url);
    if (!res.ok)
      throw console.error(
        `Couldn't get info from ${url}, status: ${res.status}`
      );

    return await res.json();
  }

  async getAllPets() {
    return await this.getResource(this._url)
     .then(data => {
      return data;
    });
  }

  getPet(id) {
    const pets = this.getResource(this._url);

    pets.forEach((el, i) => {
      if (el.id === id) {
        return el[i];
      } else {
        console.log("Pet was not found");
      }
    });
  }

  _transformData = (item) => {
    return {
      name: item.name,
      img: item.img,
      type: item.type,
      breed: item.breed,
      description: item.description,
      age: item.age,
      inoculations: item.inoculations,
      diseases: item.diseases,
      parasites: item.parasites,
    };
  };
}

export default GetPets;
