export class ImageAlbum {

    #name;
    #folderPath = "Assets/Images/";
    #albumPath = "";

    constructor(name, folderPath){

        this.#name = name;
        
        if(folderPath != null){

            this.#folderPath = "";
            this.#folderPath = folderPath;   

        }
        
        this.#albumPath = name + "/";

    }

    getName(){

        return this.#name;

    }

    getImagePath(imageName, fileExtension, extraPath){

        if(extraPath == undefined)
            extraPath = "";

        return (this.#folderPath + this.#albumPath + extraPath + imageName + fileExtension);

    }
    
}