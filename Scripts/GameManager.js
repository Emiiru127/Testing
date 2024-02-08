import { CharacterDisplay } from "./Classes/CharacterDisplay.js";
import { DialoguePrinter } from "./Classes/DialoguePrinter.js";
import { LayerDisplay } from "./Utilities/LayerDisplay.js";

export class GameManager{
    
    #handler;

    #layerDisplay;

    #characterDisplay;
    #dialoguePrinter;

    constructor(handler){

        this.#handler = handler;
        this.#handler.setGameManager(this);

        this.#layerDisplay = new LayerDisplay(5);

        this.#characterDisplay = new CharacterDisplay(this.#handler.getAssetManager().getCharacterLibrary(), this.#handler.getAssetManager().getAnimationLibrary());
        this.#dialoguePrinter = new DialoguePrinter(this.#handler.getAssetManager().getAnimationLibrary(), this.#handler.getAssetManager().getFontLibrary());

    }

    addElementOnLayer(layerID, element){

        this.#layerDisplay.addElementOnLayer(layerID, element);

    }

    removeElementOnLayer(layerID, element){

        this.#layerDisplay.removeElementOnLayer(layerID, element);

    }

    getLayerDisplay(){

        return this.#layerDisplay;

    }

    getCharacterDisplay(){

        return this.#characterDisplay;

    }

    getDialoguePrinter(){

        return this.#dialoguePrinter;

    }

}