import { visualNovelEngine } from "../VNInitialScript.js";

// SYSTEM ASSETS

{

    let assetManager = visualNovelEngine.getHandler().getAssetManager();

    assetManager.addCharacter("Sumi");

    assetManager.addCustomAnimation("characterShowAnimation", "characterShowAnimation", "2s", 1);
    assetManager.addCustomAnimation("characterHideAnimation", "characterHideAnimation", "2s", 1);

    assetManager.addCustomAnimation("dialoguePrinterShowAnimation", "dialoguePrinterShowAnimation", "2s", 1);
    assetManager.addCustomAnimation("dialoguePrinterHideAnimation", "dialoguePrinterHideAnimation", "2s", 1);
    assetManager.addCustomAnimation("dialoguePrinterRequesterAnimation", "dialoguePrinterRequesterAnimation", "0.5s", "infinite");

    assetManager.addFont("DotGothic16");

    assetManager.addImageAlbum("System");

}

// SYSTEM DEFAULT EVENTS

{

    let stateManager = visualNovelEngine.getHandler().getStateManager();

    //STATES
    //Menu State
    (stateManager.getStateButton("menuState", "menuStartBtn")).onclick = () => {
        
        stateManager.setCurrentState("gameState");
        testing();

    };

    (stateManager.getStateButton("menuState", "menuSettingsBtn")).onclick = () => {

        stateManager.setCurrentState("settingsState");
        
    };

    (stateManager.getStateButton("menuState", "menuCreditsBtn")).onclick = () => {

        stateManager.setCurrentState("creditsState");

    };

    //Settings State
    (stateManager.getStateButton("settingsState", "settingsBackBtn")).onclick = () => {

        stateManager.setCurrentState("menuState");

    };

    //Credits State
    (stateManager.getStateButton("creditsState", "creditsBackBtn")).onclick = () => {

        stateManager.setCurrentState("menuState");

    };

    //UI
    let uiManager = visualNovelEngine.getHandler().getUIManager();
    let gameManager = visualNovelEngine.getHandler().getGameManager()
    let layerDisplay = gameManager.getLayerDisplay();

    let hudMenuBtn = uiManager.getUI("headsUpDisplayMenuBtn");

    let menu = uiManager.getUI("menuUI");
    let settings = uiManager.getUI("settingsUI");

    let menuResumeBtn =  uiManager.getUI("menuResumeBtn");
    let menuSettingsBtn =  uiManager.getUI("menuSettingsBtn");
    let menuMainMenuBtn =  uiManager.getUI("menuMainMenuBtn");

    let settingsUIBackBtn =  uiManager.getUI("settingsUIBackBtn");

    hudMenuBtn.onclick = () => {

        layerDisplay.addElementOnLayer(0, menu);

    }

    menuResumeBtn.onclick = () => {

        layerDisplay.removeElementOnLayer(0, menu);

    }
    menuSettingsBtn.onclick = () => {

        layerDisplay.addElementOnLayer(0, settings);

    }
    menuMainMenuBtn.onclick = () => {

        layerDisplay.removeElementOnLayer(0, menu);
        stateManager.setCurrentState("menuState");

    }

    settingsUIBackBtn.onclick = () => {

        layerDisplay.removeElementOnLayer(0, settings);

    }

}

// MANAGER SETUP

{

    let gameManager = visualNovelEngine.getHandler().getGameManager();
    let stateManager = visualNovelEngine.getHandler().getStateManager();
    let assetManager = visualNovelEngine.getHandler().getAssetManager();
    let uiManager = visualNovelEngine.getHandler().getUIManager();

    let characterDisplay = gameManager.getCharacterDisplay();
    let dialoguePrinter = gameManager.getDialoguePrinter();
    let layerDisplay = gameManager.getLayerDisplay();

    stateManager.appendOnFirstChild("gameState", layerDisplay.getDisplay());

    characterDisplay.setCurrentShowAnimation("characterShowAnimation");
    characterDisplay.setCurrentHideAnimation("characterHideAnimation");

    dialoguePrinter.setCurrentShowAnimation("dialoguePrinterShowAnimation");
    dialoguePrinter.setCurrentHideAnimation("dialoguePrinterHideAnimation");
    dialoguePrinter.setRequesterAnimation("dialoguePrinterRequesterAnimation");

    dialoguePrinter.setDefaultFontName("DotGothic16");
    dialoguePrinter.setDefaultFontText("DotGothic16");

    dialoguePrinter.setDefaultFontSizeName(3);
    dialoguePrinter.setDefaultFontSizeText(2.5);

    dialoguePrinter.setNameBoxImage(assetManager.getImage("System", "Dialogue_Box_Design"));
    dialoguePrinter.setTextBoxImage(assetManager.getImage("System", "Dialogue_Box_Design"));
    dialoguePrinter.setRequesterImage(assetManager.getImage("System", "Dialogue_Requester"));

    layerDisplay.addElementOnLayer(1, dialoguePrinter.getDisplay());
    layerDisplay.addElementOnLayer(3, characterDisplay.getDisplay());

    let hudMenuBtn = uiManager.getUI("headsUpDisplayMenuBtn");
    layerDisplay.addElementOnLayer(0, hudMenuBtn);

}

visualNovelEngine.attachScriptPhase2();

// TESTING UNITS



    let gameManager = visualNovelEngine.getHandler().getGameManager();

    let characterDisplay = gameManager.getCharacterDisplay();
    let dialoguePrinter = gameManager.getDialoguePrinter();

    let startbtn = document.getElementById("menuStart");   

     //Testing Character Display...
   /*  {

        let temp = false;
        let test1 = setInterval(() => {

            if(temp == false){

                temp = true;

                characterDisplay.showCharacter(1, "Sumi", "Sumi_WinterUni_Smile");
                characterDisplay.showCharacter(2, "Sumi", "Sumi_WinterUni_Smile");
                characterDisplay.showCharacter(3, "Sumi", "Sumi_WinterUni_Smile");
                characterDisplay.showCharacter(4, "Sumi", "Sumi_WinterUni_Smile");
                characterDisplay.showCharacter(5, "Sumi", "Sumi_WinterUni_Smile");

            }
            else if (temp == true){

                temp = false;

                characterDisplay.hideCharacter(1);
                characterDisplay.hideCharacter(2);
                characterDisplay.hideCharacter(3);
                characterDisplay.hideCharacter(4);
                characterDisplay.hideCharacter(5);

            }   

        }, 5000);

    }*/
    //End of Testing Character Display...

    //Testing Dialogue Printer...


    function testing(){

        


        let dialoguePrinterTest = () => {

            setTimeout(() => {

                dialoguePrinter.showDisplay(); 
            
            }, 2000);

            setTimeout(() => {
    
                dialoguePrinter.printName([
                    
                    
                    ["UNKNOWN PERSON", "Red_Text" , 100],
            
                ]);
                dialoguePrinter.setDefaultFontSizeText(3);
                dialoguePrinter.printText([
                
                ["So you are here?...               ", undefined , 100],
                ["$", undefined, "br"],
                [" Prepare yourself against this...", undefined , 75],
                
                ]);
            
            }, 4000);
    
            setTimeout(() => {
    
                dialoguePrinter.setDefaultFontSizeText(7);
                dialoguePrinter.printText([
                
                    [" On 3.....", undefined , 75],
                    
                ]);
                
            
            }, 12000);

            setTimeout(() => {
    
                dialoguePrinter.setDefaultFontSizeText(10);
                dialoguePrinter.printText([
                
                    [" 2...", "Bold_Text" , 75],
                    
                ]);
                
            
            }, 14000);

            setTimeout(() => {
                dialoguePrinter.setDefaultFontSizeText(15);
                dialoguePrinter.printText([
                
                    [" 1...", "Red_Text Bold_Text" , 75],
                    
                ]);
                
            
            }, 16000);

            setTimeout(() => {
    
                let uiManager = visualNovelEngine.getHandler().getUIManager();
                let layerDisplay = gameManager.getLayerDisplay();

                let videoPlayerUI = uiManager.getUI("videoPlayerUI");
                let videoPlayer = uiManager.getUI("videoPlayer");

                layerDisplay.addElementOnLayer(0, videoPlayerUI);
                videoPlayer.play();
        
            
            }, 18000);

        }


        setTimeout(() => {

            dialoguePrinterTest(); 
        
        }, 3000);


        

    }

/*
        let dialoguePrinterTest = () => {

            setTimeout(() => {
    
                dialoguePrinter.printName("System");
    
                dialoguePrinter.printText([
                
                ["Testing testing, this is a demonstration test from the ", undefined , 20],
                ["Dialogue Printer", "Red_Text Bold_Text", 100],
                [" of the Visual Novel Engine 2.0", undefined, 20]
                
                ]);
            
            }, 5000);
    
            setTimeout(() => {
    
                dialoguePrinter.printName("Dialogue Printer System");
                
            
            }, 10000);

        }
*/
        //dialoguePrinterTest();
/*
        let test2 = setInterval(() => {

            dialoguePrinterTest();

        }, 15000);

*/
    //End of Testing Dialogue Printer...


    




