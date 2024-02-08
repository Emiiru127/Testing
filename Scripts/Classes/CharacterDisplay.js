export class CharacterDisplay{

    #display;
    #numOfCharacterSlots = 5;
    #characterSlots = null;
    #currentID = this.#numOfCharacterSlots;
    #charactersLibrary;
    #animationLibrary;

    #currentShowAnimation;
    #currentHideAnimation;

    constructor(charactersLibrary, animationLibrary){

        this.#display = document.createElement("div");
        this.#display.className = "characterDisplay";
        this.#charactersLibrary = charactersLibrary;
        this.#animationLibrary = animationLibrary;
        this.#characterSlots = [];

        this.#currentShowAnimation = ["animation", "seconds", "iteration"];
        this.#currentHideAnimation = ["animation", "seconds", "iteration"];

        for(let i = 1; i <= this.#numOfCharacterSlots; i++){

            this.#characterSlots[i - 1] = this.#createCharacterSlot(i);
            this.#display.appendChild(this.#characterSlots[i - 1].characterPanel);

        }

    }

    #createCharacterSlot(id){

        let characterSlot = {

            id: id,
            characterPanel: document.createElement("div"),
            xPanel: document.createElement("div"),
            yPanel: document.createElement("div"),
            zPanel: document.createElement("div"),
            flipPanel: document.createElement("div"),
            img: document.createElement("img"),

            currentShowAnimation: null,
            currentHideAnimation: null,

            setImagePath(path){

                this.img.src = path;

            },

            show(){

                if(this.currentShowAnimation != null){

                    this.characterPanel.style.animation = (this.currentShowAnimation[0] + " " + this.currentShowAnimation[1] + " " + this.currentShowAnimation[2]);
                    this.characterPanel.style.opacity = 1;

                    setTimeout(() => {

                        this.characterPanel.style.animation = "";
                    
                    }, this.currentShowAnimation[1].substring(0, 1) * 1000);

                }
                else{

                    this.characterPanel.style.opacity = 1;

                }

            },

            hide(){

                if(this.currentHideAnimation != null){

                    this.characterPanel.style.animation = (this.currentHideAnimation[0] + " " + this.currentHideAnimation[1] + " " + this.currentHideAnimation[2]);
                    this.characterPanel.style.opacity = 0;

                    setTimeout(() => {

                        this.characterPanel.style.animation = "";
                    
                    }, this.currentHideAnimation[1].substring(0, 1) * 1000);

                }
                else{

                    this.characterPanel.style.opacity = 0;

                }

            },

            setAnimation(currentShowAnimation, currentHideAnimation){

                this.currentShowAnimation = currentShowAnimation;
                this.currentHideAnimation = currentHideAnimation;

            },

            resetImageSource(){

                setTimeout(() => {

                    this.setImagePath("");
                
                }, this.currentHideAnimation[1].substring(0, 1) * 1000);

            }

        }

        characterSlot.characterPanel.className = "characterPanel";
        characterSlot.xPanel.className = "character";
        characterSlot.yPanel.className = "character";
        characterSlot.zPanel.className = "character";
        characterSlot.flipPanel.className = "character";
        characterSlot.img.className = "character";

        characterSlot.characterPanel.id = "characterPanel" + id;
        characterSlot.xPanel.id = "xPanel" + id;
        characterSlot.yPanel.id = "yPanel" + id;
        characterSlot.zPanel.id = "zPanel" + id;
        characterSlot.flipPanel.id = "flipPanel" + id;
        characterSlot.img.id = "characterImage" + id;

        characterSlot.flipPanel.appendChild(characterSlot.img);
        characterSlot.zPanel.appendChild(characterSlot.flipPanel);
        characterSlot.yPanel.appendChild(characterSlot.zPanel);
        characterSlot.xPanel.appendChild(characterSlot.yPanel);
        characterSlot.characterPanel.appendChild(characterSlot.xPanel);

        return characterSlot;

    }

    showCharacter(slot, character, sprite, fileExtension){

        if(fileExtension == null){

            fileExtension = ".png";

        }

        this.#setImage(slot, character, sprite, fileExtension);
        this.#characterSlots[slot - 1].show();

    }

    hideCharacter(slot){

        this.#characterSlots[slot - 1].hide();
    
    }

    #setImage(slot, character, sprite, fileExtension){

        this.#characterSlots[slot - 1].setImagePath((this.#charactersLibrary.getCharacter(character)).getSprite(sprite, fileExtension));

    }

    setCurrentShowAnimation(animation){
 
        this.#currentShowAnimation[0] = this.#animationLibrary.getAnimation(animation).getAnimationName();
        this.#currentShowAnimation[1] = this.#animationLibrary.getAnimation(animation).getSeconds();
        this.#currentShowAnimation[2] = this.#animationLibrary.getAnimation(animation).getIteration();
        this.#updateCharacterSlotsAnimation();

    }

    setNumberOfCharacters(number){

        if (number > this.#characterSlots.length) {

            for(let i = (this.#currentID + 1); i <= number; i++){

                this.#characterSlots.push(this.#createCharacterSlot(i));
                this.#display.appendChild(this.#characterSlots[i - 1].characterPanel);

            }

            this.#currentID = number;

            this.#updateCharacterSlotsAnimation();

        } 
        else if(number < this.#characterSlots.length){

            for(let i = (this.#currentID - 1); i >= number; i--){

                this.#characterSlots.pop();
                this.#display.removeChild(this.#display.children[i]);

            }

            this.#currentID = number;

        }

    }

    setCurrentHideAnimation(animation){

        this.#currentHideAnimation[0] = this.#animationLibrary.getAnimation(animation).getAnimationName();
        this.#currentHideAnimation[1] = this.#animationLibrary.getAnimation(animation).getSeconds();
        this.#currentHideAnimation[2] = this.#animationLibrary.getAnimation(animation).getIteration();
        this.#updateCharacterSlotsAnimation();

    }

    #updateCharacterSlotsAnimation(){

        for(let i = 0; i < this.#characterSlots.length; i++){

            this.#characterSlots[i].setAnimation(this.#currentShowAnimation, this.#currentHideAnimation);

        }

    }

    getDisplay(){

        return this.#display;

    }

}
