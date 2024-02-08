export class Layer{

    #layer;
    #isDisabled;
    #layerDisplayID;
    #layerID;

    constructor(layerDisplayID, layerID){

        this.#layer = document.createElement("div");
        this.#isDisabled = false;
        this.#layerDisplayID = layerDisplayID;
        this.#layerID = layerID;
        
        this.#layer.id = "layerDisplay" + this.#layerDisplayID + "_Layer" + this.#layerID;
        this.#layer.className = "layer";

    }

    setZIndex(index){

        this.#layer.style.zIndex = index;

    }

    addElement(element){

        this.#layer.appendChild(element);

    }

    removeElement(element){

        this.#layer.removeChild(element);

    }

    getLayer(){

        return this.#layer;

    }

    activate(){

        this.#layer.style.display = "block";
        this.#isDisabled = false;

    }

    disable(){

        this.#layer.style.display = "none";
        this.#isDisabled = true;

    }

    isDisabled(){

        return this.#isDisabled;

    }

}