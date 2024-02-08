import { Character } from "./Character.js";

export class CharacterLibrary{

    #characterLibrary;

    constructor(){

        this.#characterLibrary = new Map();

    }

    addCharacter(name, characterFolderPath){

        let character = new Character(name, characterFolderPath);
        this.#characterLibrary.set(character.getName(), character);

    }

    getCharacter(key){

        return this.#characterLibrary.get(key);

    }
    
}
