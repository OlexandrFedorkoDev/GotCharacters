

export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    async getResource(url) {
        const response = await fetch(`${this._apiBase}${url}`);
        if (!response.ok) {
            throw new Error(`not fetch ${url} status ${response.status} `)
        };
        return await response.json();
    };


    async getAllCharacters() {
        const res = await this.getResource('/characters?page=5&pageSize=10')
        return res.map(this._transformCharacters())
    }
    async getCharacters(id) {
        const characters = await this.getResource(`/characters/${id}`)
        return this._transformCharacters(characters)
    }
    _transformCharacters(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture,
        }
    }

}










