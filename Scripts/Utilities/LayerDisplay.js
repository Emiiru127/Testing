import { Layer } from "./Layer.js";

export class LayerDisplay {

    static counter = 0;

    #display;
    #layers;

    constructor(numberOfLayers){

        this.#display = document.createElement("div");
        this.#display.className = "layerDisplay";
        LayerDisplay.counter++;
        
        this.#layers = [];

        for (let i = 1; i <= numberOfLayers; i++) {
            
            this.#layers.push(new Layer(LayerDisplay.counter, i));
 
        }

        this.#update();

    }

    #update(){

        for (let i = this.#layers.length, j = 1; i > 0; i--, j++) {

            this.#layers[i - 1].setZIndex(j);
            this.#display.appendChild(this.#layers[i - 1].getLayer());
            
        }

    }

    addElementOnLayer(layerID, element){

        this.#layers[layerID].addElement(element);

    }

    removeElementOnLayer(layerID, element){

        this.#layers[layerID].removeElement(element);

    }

    getDisplay(){

        return this.#display;

    }

}