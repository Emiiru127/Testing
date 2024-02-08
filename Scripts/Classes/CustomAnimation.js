export class CustomAnimation{

    #name;
    #animationName;
    #seconds;
    #iteration;

    constructor(name, animationName, seconds, iteration){

        this.#name = name;
        this.#animationName = animationName;
        this.#seconds = seconds;
        this.#iteration = iteration;
    
    }

    getName(){

        return this.#name;

    }

    getAnimationName(){

        return this.#animationName;

    }

    getSeconds(){

        return this.#seconds;

    }

    getIteration(){

        return this.#iteration;

    }


}
