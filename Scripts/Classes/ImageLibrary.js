import { ImageAlbum } from "./ImageAlbum.js";

export class ImageLibrary {

    #imageLibrary

    constructor(){

        this.#imageLibrary = new Map();

    }

    addImageAlbum(name, folderPath){

        let imageAlbum = new ImageAlbum(name, folderPath);
        this.#imageLibrary.set(name, imageAlbum);

    }

    getImage(albumName, imageName, fileExtension, extraPath){

        if(fileExtension == null){

            fileExtension = ".png";

        }

        let imageAlbum = this.#imageLibrary.get(albumName);
        return imageAlbum.getImagePath(imageName, fileExtension, extraPath);

    }

}