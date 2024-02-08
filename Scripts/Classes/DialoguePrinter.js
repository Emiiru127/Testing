export class DialoguePrinter {

    #display;
    #dialoguePrinter;
    #dialoguePrinterNameBox;
    #dialoguePrinterTextBox;
    #dialoguePrinterRequester;

    #nameBoxText;
    #textBoxText;

    #printingNameSpeed;
    #printingTextSpeed;
    #printingTextMessageLength;
    #printingNameMessageLength;

    #isPrintingName = false;
    #isPrintingText = false;

    #isDonePrinting = true;

    #animationLibrary;
    #fontLibrary;

    #currentDisplayShowAnimation;
    #currentDisplayHideAnimation;
    
    #currentRequesterAnimation;

    #defaultNameClass = "dialoguePrinterDefaultNameClass";
    #defaultTextClass = "dialoguePrinterDefaultTextClass";

    #defaultFontName;
    #defaultFontText;

    #defaultFontSizeName;
    #defaultFontSizeText;

    #defaultFontStyleName;
    #defaultFontStyleText;

    #defaultFontWeightName;
    #defaultFontWeightText;

    constructor(animationLibrary, fontLibrary){

        this.#display = document.createElement("div");
        this.#display.className = "dialoguePrinterDisplay";

        this.#dialoguePrinter = document.createElement("div");
        this.#dialoguePrinter.className = "dialoguePrinter";

        this.#dialoguePrinterNameBox = document.createElement("div");
        this.#dialoguePrinterNameBox.className = "dialoguePrinterNameBox";

        this.#dialoguePrinterTextBox = document.createElement("div");
        this.#dialoguePrinterTextBox.className = "dialoguePrinterTextBox";

        this.#dialoguePrinterRequester = document.createElement("div");
        this.#dialoguePrinterRequester.className = "dialoguePrinterRequester";

        this.#textBoxText = document.createElement("div");
        this.#textBoxText.className = "dialoguePrinterTextBoxText";
        
        this.#nameBoxText = document.createElement("div");
        this.#nameBoxText.className = "dialoguePrinterNameBoxText";

        this.#dialoguePrinterNameBox.appendChild(this.#nameBoxText);
        this.#dialoguePrinterTextBox.appendChild(this.#textBoxText);
        this.#dialoguePrinterTextBox.appendChild(this.#dialoguePrinterRequester);

        this.#dialoguePrinter.appendChild(this.#dialoguePrinterNameBox);
        this.#dialoguePrinter.appendChild(this.#dialoguePrinterTextBox);
        
        this.#display.appendChild(this.#dialoguePrinter);

        this.#animationLibrary = animationLibrary;
        this.#fontLibrary = fontLibrary;

        this.#currentDisplayShowAnimation = ["animation", "seconds", "iteration"];
        this.#currentDisplayHideAnimation = ["animation", "seconds", "iteration"];

        this.#currentRequesterAnimation = ["animation", "seconds", "iteration"];

        this.#printingNameMessageLength = 0;
        this.#printingTextMessageLength = 0;

        this.setDefaultPrintSpeedName(100);
        this.setDefaultPrintSpeedText(50);

        this.setDefaultFontSizeName(2);
        this.setDefaultFontSizeText(2);

        this.setDefaultFontStyleName("normal");
        this.setDefaultFontStyleText("normal");

        this.setDefaultFontWeightName("bold");
        this.setDefaultFontWeightText("normal");

        this.hideDisplay();
        this.hideRequester();

    }

    update(){

        if(this.#isPrintingName == false && this.#isPrintingText == false){

            this.#isDonePrinting = true;
            this.showRequester();

        }
        else{

            this.#isDonePrinting = false;

        }

        if(this.#isDonePrinting){

            if(this.#printingNameMessageLength != 0 && this.#printingTextMessageLength != 0){

                this.showRequester();

            }

        }

    }

    setNameBox(name){

        this.#nameBoxText.innerHTML = name;

    }

    setTextBox(text){

        this.#textBoxText.innerHTML = text;

    }

    addNameBoxText(nameCharacter, customClass, customElement){

        if(nameCharacter == undefined){

            nameCharacter = "";

        }
        
        if(customClass == undefined){

            customClass = " ";

        }

        if(customElement == undefined){

            customElement = "span";

        }

        let character = document.createElement(customElement);
        character.innerHTML = nameCharacter;
        character.className = this.#defaultNameClass + customClass;
        this.#nameBoxText.appendChild(character);

    }

    addTextBoxText(textCharacter, customClass, customElement){

        if(textCharacter == undefined){

            textCharacter = "";

        }

        if(customClass == undefined){

            customClass = " ";

        }

        if(customElement == undefined){

            customElement = "span";

        }

        let character = document.createElement(customElement);
        character.innerHTML = textCharacter;
        character.className = this.#defaultTextClass + " " + customClass;
        this.#textBoxText.appendChild(character);
        
    }

    printingName(name, className, specialParam){

        return new Promise((resolve) => {

            let nameIndex = 0;
            let printingSpeed = this.#printingNameSpeed;


            if(name != "$"){

                if(specialParam != undefined){

                    printingSpeed = specialParam;

                }

            }

            if(name == "$"){
 
                this.addTextBoxText(undefined, className, specialParam);
                return resolve();

            }

            let printer = setInterval( () => {

                this.addNameBoxText(name.charAt(nameIndex), className);
                nameIndex++;
                this.#printingNameMessageLength++;

                if(nameIndex == name.length){

                    clearInterval(printer);
                    resolve();

                }

            }, printingSpeed);

        });

    }

    printingText(text, className, specialParam){

        return new Promise((resolve) => {

            let textIndex = 0;
            let printingSpeed = this.#printingTextSpeed;


            if(text != "$"){

                if(specialParam != undefined){

                    printingSpeed = specialParam;

                }

            }

            if(text == "$"){
 
                this.addTextBoxText(undefined, className, specialParam);
                return resolve();

            }

            let printer = setInterval( () => {

                this.addTextBoxText(text.charAt(textIndex), className);
                textIndex++;
                this.#printingTextMessageLength++;

                if(textIndex == text.length){

                    clearInterval(printer);
                    resolve();

                }

            }, printingSpeed);

        });

    }

    async printName(name){

        this.#clearNameBox();
        this.hideRequester();

        this.#isPrintingName = true;

        for(let i = 0; i < name.length; i++){

            await this.printingName(name[i][0], name[i][1], name[i][2]); 
            
        }
        
        this.#isPrintingName = false;
        this.update();

    }

    async printText(text){

        this.#clearTextBox();
        this.hideRequester();

        this.#isPrintingText = true;

        for(let i = 0; i < text.length; i++){

            await this.printingText(text[i][0], text[i][1], text[i][2]); 
            
        }

        this.#isPrintingText = false;
        this.update();

    }

    showRequester(){

        this.#dialoguePrinterRequester.style.display = "block";

    }

    hideRequester(){

        this.#dialoguePrinterRequester.style.display = "none";

    }

    showDisplay(){

        if(this.#currentDisplayShowAnimation != null){

            this.#dialoguePrinter.style.animation = (this.#currentDisplayShowAnimation[0] + " " + this.#currentDisplayShowAnimation[1] + " " + this.#currentDisplayShowAnimation[2]);
            this.#dialoguePrinter.style.opacity = 1;

            setTimeout(() => {

                this.#dialoguePrinter.style.animation = "";

            }, this.#currentDisplayShowAnimation[1].substring(0, this.#currentDisplayShowAnimation[1].indexOf("s")) * 1000);

        }
        else{

            this.#dialoguePrinter.style.opacity = 1;

        } 

    }

    hideDisplay(){

        if(this.#currentDisplayHideAnimation != null){

            this.#dialoguePrinter.style.animation = (this.#currentDisplayHideAnimation[0] + " " + this.#currentDisplayHideAnimation[1] + " " + this.#currentDisplayHideAnimation[2]);
            this.#dialoguePrinter.style.opacity = 0;

            setTimeout(() => {

                this.#dialoguePrinter.style.animation = "";
            
            }, this.#currentDisplayHideAnimation[1].substring(0, this.#currentDisplayHideAnimation[1].indexOf("s")) * 1000);

        }
        else{

            this.#dialoguePrinter.style.opacity = 0;

        }

    }

    setDefaultPrintSpeedName(speed){

        this.#printingNameSpeed = speed;

    }

    setDefaultPrintSpeedText(speed){

        this.#printingTextSpeed = speed;

    }

    setDefaultFontName(fontName){

        this.#defaultFontName = this.#fontLibrary.getFont(fontName);
        this.#nameBoxText.style.fontFamily = this.#defaultFontName.getName();

    }

    setDefaultFontText(fontName){

        this.#defaultFontText = this.#fontLibrary.getFont(fontName);
        this.#textBoxText.style.fontFamily = this.#defaultFontText.getName();

    }

    setDefaultFontSizeName(fontSize){

        this.#defaultFontSizeName = fontSize;
        this.#nameBoxText.style.fontSize = this.#defaultFontSizeName + "vh";

    }

    setDefaultFontSizeText(fontSize){

        this.#defaultFontSizeText = fontSize;
        this.#textBoxText.style.fontSize =  this.#defaultFontSizeText + "vh";

    }

    setDefaultFontStyleName(fontStyle){

        this.#defaultFontStyleName = fontStyle;
        this.#nameBoxText.style.fontStyle = this.#defaultFontStyleName;

    }

    setDefaultFontStyleText(fontStyle){

        this.#defaultFontStyleText = fontStyle;
        this.#textBoxText.style.fontStyle =  this.#defaultFontStyleText;


    }


    setDefaultFontWeightName(fontWeight){

        this.#defaultFontWeightName = fontWeight;
        this.#nameBoxText.style.fontWeight =  this.#defaultFontWeightName;

    }

    setDefaultFontWeightText(fontWeight){

        this.#defaultFontWeightText = fontWeight;
        this.#textBoxText.style.fontWeight = this.#defaultFontWeightText;

    }


    setRequesterAnimation(animation){

        this.#currentRequesterAnimation[0] = this.#animationLibrary.getAnimation(animation).getAnimationName();
        this.#currentRequesterAnimation[1] = this.#animationLibrary.getAnimation(animation).getSeconds();
        this.#currentRequesterAnimation[2] = this.#animationLibrary.getAnimation(animation).getIteration();

        this.#dialoguePrinterRequester.style.animation = (this.#currentRequesterAnimation[0] + " " + this.#currentRequesterAnimation[1] + " " + this.#currentRequesterAnimation[2]);

    }

    setCurrentShowAnimation(animation){
 
        this.#currentDisplayShowAnimation[0] = this.#animationLibrary.getAnimation(animation).getAnimationName();
        this.#currentDisplayShowAnimation[1] = this.#animationLibrary.getAnimation(animation).getSeconds();
        this.#currentDisplayShowAnimation[2] = this.#animationLibrary.getAnimation(animation).getIteration();

    }

    setCurrentHideAnimation(animation){

        this.#currentDisplayHideAnimation[0] = this.#animationLibrary.getAnimation(animation).getAnimationName();
        this.#currentDisplayHideAnimation[1] = this.#animationLibrary.getAnimation(animation).getSeconds();
        this.#currentDisplayHideAnimation[2] = this.#animationLibrary.getAnimation(animation).getIteration();

    }

    setNameBoxImage(srcImage){

        this.#dialoguePrinterNameBox.style.backgroundImage = "url('" + srcImage + "')";

    }

    setTextBoxImage(srcImage){

        this.#dialoguePrinterTextBox.style.backgroundImage  = "url('" + srcImage + "')";

    }

    setRequesterImage(srcImage){

        this.#dialoguePrinterRequester.style.backgroundImage  = "url('" + srcImage + "')";

    }

    clear(){

        this.#clearNameBox();
        this.#clearTextBox();
        this.hideRequester();

    }

    #clearNameBox(){

        this.#nameBoxText.innerHTML = "";

    }

    #clearTextBox(){

        this.#textBoxText.innerHTML = "";

    }

    getDisplay(){

        return this.#display;

    }

}