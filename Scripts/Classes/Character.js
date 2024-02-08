export class Character{

    #name;
    #folderPath = "Assets/Characters/";

    constructor(name, folderPath){

        this.#name = name;
        
        if(folderPath != null){

            this.#folderPath = folderPath;
            this.#folderPath += name;   

        }
        else{

            this.#folderPath += name;

        }

    }

    getName(){

        return this.#name;

    }

    getSprite(spriteName, fileExtension, extraPath){

        if(extraPath == undefined)
            extraPath = "";

        return (this.#folderPath + "/Sprites/" + extraPath + spriteName + fileExtension);

    }

    getVoiceLine(voiceLineName, fileExtension, extraPath){

        if(extraPath == undefined)
            extraPath = "";
            
        return (this.#folderPath + "/Voice Lines/" + extraPath + voiceLineName + fileExtension);

    }

}