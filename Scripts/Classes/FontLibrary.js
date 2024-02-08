import { Font } from "./Font.js";

export class FontLibrary {

    #fontLibrary

    constructor(){

        this.#fontLibrary = new Map();

    }

    addFont(fontName){

        let font = new Font(fontName);
        this.#fontLibrary.set(fontName, font);

    }

    getFont(fontName){

        return this.#fontLibrary.get(fontName);

    }

}