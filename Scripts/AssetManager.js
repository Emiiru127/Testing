import { FontLibrary } from "./Classes/FontLibrary.js";
import { ImageLibrary } from "./Classes/ImageLibrary.js";
import { AnimationLibrary } from "./Classes/AnimationLibrary.js";
import { CharacterLibrary } from "./Classes/CharacterLibrary.js";

export class AssetManager {

    #handler;

    #fontLibrary;
    #imageLibrary;
    #animationLibrary;
    #characterLibrary;

    #characterFolderPath = "Assets/Characters/";

    constructor(handler){

        this.#handler = handler;
        this.#handler.setAssetManager(this);

        this.#fontLibrary = new FontLibrary();
        this.#imageLibrary = new ImageLibrary();
        this.#animationLibrary = new AnimationLibrary();
        this.#characterLibrary = new CharacterLibrary();

    }

    addFont(name){

        this.#fontLibrary.addFont(name);

    }

    addImageAlbum(name){

        this.#imageLibrary.addImageAlbum(name);

    }

    addCustomAnimation(name, animationName, seconds, iteration){

        this.#animationLibrary.addAnimation(name, animationName, seconds, iteration);

    }

    addCharacter(name){

        this.#characterLibrary.addCharacter(name, this.#characterFolderPath);

    }

    getFont(name){

        return this.#fontLibrary.getFont(name);

    }

    getImage(albumName, imageName, fileExtension, extraPath){

        return this.#imageLibrary.getImage(albumName, imageName, fileExtension, extraPath);

    }

    getCustomAnimation(name){

        return this.#animationLibrary.getAnimation(name);

    }

    getCharacter(name){

        return this.#characterLibrary.getCharacter(name);
    
    }

    getFontLibrary(){

        return this.#fontLibrary;

    }

    getImageLibrary(){

        return this.#imageLibrary;

    }

    getAnimationLibrary(){

        return this.#animationLibrary;

    }

    getCharacterLibrary(){

        return this.#characterLibrary;

    }

}