export class UILibrary {

    #UIList;

    constructor(){

        this.#UIList = new Map;

    }

    addUI(key, ui){

        this.#UIList.set(key, ui);

    }

    getUI(key){

        return this.#UIList.get(key);

    }

}