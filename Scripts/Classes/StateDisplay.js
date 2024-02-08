export class StateDisplay{

    #stateLibrary;
    #currentState;

    constructor(stateLibrary){

        this.#stateLibrary = stateLibrary;
        this.#currentState;

    }

    // primary methods
    #update(){

        if(this.#currentState == null){

            return;

        }
        
        for (let state of this.#stateLibrary.getStates().values()){

            if(this.#currentState.getName() == state.getName()){

                state.activate();

            }
            else{

                state.disable();

            }

        }

    }

    // secondary methods
    setCurrentState(key){

        this.#currentState = this.#stateLibrary.getState(key);
        this.#update();
        
    }

    getCurrentState(){

        return this.#currentState;

    }

}
