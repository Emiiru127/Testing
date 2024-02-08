export class Handler {

    #vnMainFrame

    #gameManager;
    #eventManager;
    #stateManager;
    #uiManager;
    #soundManager;
    #assetManager;

    addChildVNMainFrame(node){

        this.#vnMainFrame.appendChild(node);

    }

    setVNMainFrame(vnMainFrame){

        this.#vnMainFrame = vnMainFrame;

    }

    setGameManager(gameManager){

        this.#gameManager = gameManager;

    }

    setEventManager(eventManager){

        this.#eventManager = eventManager;

    }

    setStateManager(stateManager){

        this.#stateManager = stateManager;

    }

    setUIManager(uiManager){

        this.#uiManager = uiManager;

    }

    setSoundManager(soundManager){

        this.#soundManager = soundManager;

    }

    setAssetManager(assetManager){

        this.#assetManager = assetManager;

    }

    getGameManager(){

        return this.#gameManager;

    }

    getEventManager(){

        return this.#eventManager;

    }

    getStateManager(){

        return this.#stateManager;

    }

    getUIManager(){

        return this.#uiManager;

    }

    getSoundManager(){

        return this.#soundManager;

    }

    getAssetManager(){

        return this.#assetManager;

    }

}