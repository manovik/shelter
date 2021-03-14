class PetsService {
  // _url = "http://localhost:3300";
  // _pets = "/pets";
  // _help = "/help";


  ur = './pets.json';

  async getResource(url) {
    const res = await fetch(url);
    if (!res.ok)
      throw console.error(
        `Couldn't get info from ${url}, status: ${res.status}`
      );

    return await res.json();
  }

  getAllPets() {
    return this.getResource(`${this.ur}`).then(data => this.getRandomPets(data.pets));
  }

  // getAllPets() {
  //   return this.getResource(`${this._url}${this._pets}`).then(data => this.getRandomPets(data));
  // }

  async getAllHelp() {
    return await this.getResource(`${this.ur}`).then(h => h.help);
  }
  // async getAllHelp() {
  //   return await this.getResource(`${this._url}${this._help}`);
  // }

  getRandomPets(arr) {
    const randArr = [];

    function rand() {
      return Math.floor(Math.random() * arr.length);
    };
    
    for (let i = 0; i < arr.length; i++) {
      const pet = arr[rand()];    
      if(!randArr.includes(pet)) {
        randArr.push(pet);
      } else {
        i -= 1;
      }
    }
    return randArr;
  }
}

export default PetsService;
