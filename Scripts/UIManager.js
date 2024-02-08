import { UILibrary } from "./Classes/UILibrary.js";

export class UIManager {

    #handler

    #uiLibrary;

    constructor(handler){

        this.#handler = handler;
        this.#handler.setUIManager(this);

        this.#uiLibrary = new UILibrary();
        
    }

    addUI(key, ui){

        this.#uiLibrary.addUI(key, ui);

    }

    getUI(key){

        return this.#uiLibrary.getUI(key);

    }

}