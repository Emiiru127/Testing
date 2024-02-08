import { State } from "./State.js";

export class StatesLibrary{ 

    #states;

     constructor(){

        this.#states = new Map();

    }

    addState(key, state, display){

        let vnState = new State(key, state)
        this.#states.set(key, vnState);

        if(display != null){

            if(display == true){

                vnState.activate();

            }
            else if(display == false){

                vnState.disable();

            }

        }

    }

    appendOnFirstChild(keyState, node){

        this.#states.get(keyState).appendOnFirstChild(node);

    }

    addStateButton(keyState, keyStateButton, stateButton){

        this.#states.get(keyState).addStateButton(keyStateButton, stateButton);

    }

    getStateButton(keyState, keyStateButton){

        return (this.#states.get(keyState)).getStateButton(keyStateButton);

    }

    getState(key){

        return this.#states.get(key);

    }

    getStates(){

        return this.#states;

    }


}