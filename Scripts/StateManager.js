import { StatesLibrary } from "./Classes/StatesLibrary.js";
import { StateDisplay } from "./Classes/StateDisplay.js";

export class StateManager {

    #handler;

    #stateDisplay;
    #stateLibrary;

    constructor(handler){

        this.#handler = handler;
        this.#handler.setStateManager(this);

        this.#stateLibrary = new StatesLibrary();
        this.#stateDisplay = new StateDisplay(this.getStateLibrary());

    }

    setCurrentState(key){

        this.#stateDisplay.setCurrentState(key);

    }

    addState(key, state, display){

        this.#stateLibrary.addState(key, state, display);
        this.#handler.addChildVNMainFrame(state);

    }

    addStateButton(keyState, keyStateButton, stateButton){

        this.#stateLibrary.addStateButton(keyState, keyStateButton, stateButton);

    }

    appendOnFirstChild(keyState, node){

        this.#stateLibrary.appendOnFirstChild(keyState, node);

    }

    getStateButton(keyState, keyStateButton){

        return this.#stateLibrary.getStateButton(keyState, keyStateButton);

    }

    getState(key){

        return this.#stateLibrary.getState(key);

    }

    getStateDisplay(){

        return this.#stateDisplay;

    }

    getStateLibrary(){

        return this.#stateLibrary;

    }

}