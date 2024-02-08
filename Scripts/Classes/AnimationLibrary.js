import { CustomAnimation } from "./CustomAnimation.js";

export class AnimationLibrary{

    #animationLibrary;

    constructor(){

        this.#animationLibrary = new Map();

    }

    addAnimation(name, animationName, seconds, iteration){

        let customAnimation = new CustomAnimation(name, animationName, seconds, iteration);
        this.#animationLibrary.set(customAnimation.getName(), customAnimation);

    }

    getAnimation(key){

        return this.#animationLibrary.get(key);

    }

    showAnimationsOnConsole(){

        console.log(this.#animationLibrary);

    }

}