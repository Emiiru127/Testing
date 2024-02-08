export class State{

    #name;
    #state;

    #stateButtons;

    isActive;

    constructor(name, state){

        this.#name = name;
        this.#state = state;

        this.#stateButtons = new Map();

        this.isActive = false;

    }

    activate(){

        this.#state.style.display = "block";

    }

    disable(){

        this.#state.style.display = "none";

    }

    appendOnFirstChild(node){

        this.#state.firstChild.appendChild(node);

    }

    addStateButton(key, button){

        this.#stateButtons.set(key, button);

    }

    getStateButton(key){

        return this.#stateButtons.get(key);

    }

    getName(){

        return this.#name;

    }

    getState(){

        return this.#state;

    }

}