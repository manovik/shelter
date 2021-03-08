class PetsService {
  _url = "http://localhost:3300";
  _pets = "/pets";
  _help = "/help";

  async getResource(url) {
    const res = await fetch(url);
    if (!res.ok)
      throw console.error(
        `Couldn't get info from ${url}, status: ${res.status}`
      );

    return await res.json();
  }

  async getAllPets() {
    return await this.getResource(`${this._url}${this._pets}`);
  }

  async getAllHelp() {
    return await this.getResource(`${this._url}${this._help}`);
  }

  // getItem(id) {
  //   const items = this.getResource(this._url);

  //   pets.forEach((el, i) => {
  //     if (el.id === id) {
  //       return el[i];
  //     } else {
  //       console.log("Pet was not found");
  //     }
  //   });
  // }
}

export default PetsService;
