import { Handler } from "./Utilities/Handler.js";
import { StateManager } from "./StateManager.js";
import { AssetManager } from "./AssetManager.js";
import { UIManager } from "./UIManager.js";
import { GameManager } from "./GameManager.js";

export class VisualNovelEngine {

    #mainFrame;
    #handler;

    #requiredScriptsPhase1;
    #requiredScriptsPhase2;
    #requiredScriptsPhase3;
    #currentScriptsPhase1;
    #currentScriptsPhase2;
    #currentScriptsPhase3;

    debugMode;

    constructor(IDContainer){

        this.#mainFrame = document.getElementById(IDContainer);

        this.#requiredScriptsPhase1 = 0;
        this.#requiredScriptsPhase2 = 0; 
        this.#requiredScriptsPhase3 = 0;

        this.#currentScriptsPhase1 = 0; 
        this.#currentScriptsPhase2 = 0; 
        this. #currentScriptsPhase3 = 0;

        this.debugMode = true;

        if(this.debugMode){

            console.log("VNE: INITIALIZING VISUAL NOVEL ENGINE 2.0");
            console.log("VNE: Debugging Mode: ON");

        }

        this.#handler = new Handler();

        this.#handler.setVNMainFrame(this.#mainFrame);

        new AssetManager(this.#handler);
        if(this.debugMode) console.log("VNE: Asset Manager Initialized");
        new StateManager(this.#handler);
        if(this.debugMode) console.log("VNE: State Manager Initialized");
        new UIManager(this.#handler);
        if(this.debugMode) console.log("VNE: UI Manager Initialized");
        new GameManager(this.#handler);
        if(this.debugMode) console.log("VNE: Game Manager Initialized");

    }

    #setup(){

        if(this.debugMode) console.log("VNE: Engine Manager Initialized");
        
        this.#handler.getStateManager().setCurrentState("menuState");

    }

    getHandler(){

        return this.#handler;

    }

    addVNScript(phase, src, isModule) {

        let scriptHolder = document.getElementById("VNScripts");
        let script = document.createElement("script");
        script.defer = true;
    
        if(typeof isModule == "boolean"){
    
            if(isModule){
    
                script.type = "module";
    
            }
    
        }

        if(isModule == null){

            isModule = false;

        }

        if(this.debugMode){

            console.log("VNE: Loaded " + src + " at initialization phase " + phase);

        }
    
        script.src = src;
        scriptHolder.appendChild(script);

        switch(phase){

            case(1):
            this.#requiredScriptsPhase1++;
            break;

            case(2):
            this.#requiredScriptsPhase2++;
            break;

            case(3):
            this.#requiredScriptsPhase3++;
            break;

        }
    
    }

    addVNStyleSheet(src){

        let head = document.head
        let link = document.createElement("link");
        link.rel = "stylesheet"; 
        link.type = "text/css";
        link.href = src;
        head.appendChild(link);
    
    }

    attachScriptPhase1(){

        this.#currentScriptsPhase1++;

    }

    attachScriptPhase2(){

        this.#currentScriptsPhase2++;

    }

    attachScriptPhase3(){

        this.#currentScriptsPhase3++;

    }

    throwSystemError(message){
    
        let errorState = document.createElement("div");    
        let background = document.createElement("div");
        let title = document.createElement("h1");
    
        background.id = "errorState";
        title.id = "errorTitle";
    
        title.innerHTML = message;
    
        background.appendChild(title);
    
        errorState.appendChild(background);
    
        this.#mainFrame.innerHTML = "";
        this.#mainFrame.appendChild(errorState);
        console.log("VNE: SYSTEM FAILED TO INITIALIZED... (" + message + ")");
    
    }

    async startPhase1() {

        if(this.debugMode) console.log("VNE: Initialization Phase 1:");

        return new Promise((resolve) => {
            const averageLoadingTime = 5000; // Average loading time in milliseconds
            const timeLimit = averageLoadingTime * 1.5; // Adjust the time limit dynamically (150% of average loading time)
        
            this.#mainFrame.innerHTML = "";

            //States
            this.addVNScript(1, "Scripts/States/MenuState.js", true);
            this.addVNScript(1, "Scripts/States/GameState.js", true)
            this.addVNScript(1, "Scripts/States/SettingsState.js", true);
            this.addVNScript(1, "Scripts/States/CreditsState.js", true);
            this.addVNScript(1, "Scripts/States/LoadingState.js", true);

            //UI
            this.addVNScript(2, "Scripts/UI/HeadsUpDisplay.js", true);
            this.addVNScript(2, "Scripts/UI/Menu.js", true);
            this.addVNScript(2, "Scripts/UI/Settings.js", true);
            this.addVNScript(2, "Scripts/UI/VideoPlayer.js", true);

            //Designs
            this.addVNStyleSheet("Designs/VNDesign.css");
        
            const startTime = performance.now();
        
            let wait = setInterval(() => {

                const elapsedTime = performance.now() - startTime;
        
                if ((this.#currentScriptsPhase1 === this.#requiredScriptsPhase1 && this.#currentScriptsPhase1 !== 0) || elapsedTime >= timeLimit) {

                    if(this.debugMode){

                        console.log("VNE: Required Scripts: " + this.#requiredScriptsPhase1);
                        console.log("VNE: Current Scripts: " + this.#currentScriptsPhase1);

                        if (elapsedTime >= timeLimit) {

                            console.log("VNE: Judgement: FAILED..");

                        }
                        else{

                            console.log("VNE: Judgement: SUCCESSFUL!");

                        }

                    }

                    clearInterval(wait);
                    if (elapsedTime >= timeLimit) {
                        resolve(true);
                    }
                    resolve(false);
                }

            }, 100);

        });

    }

    async startPhase2() {

        if(this.debugMode) console.log("VNE: Initialization Phase 2:");

        return new Promise((resolve) => {
            const averageLoadingTime = 5000; // Average loading time in milliseconds
            const timeLimit = averageLoadingTime * 1.5; // Adjust the time limit dynamically (150% of average loading time)

            //System Configurations
            this.addVNScript(2, "Scripts/Game/System.js", true);

            //Assets
            this.addVNScript(2, "Scripts/Game/Assets.js", true);
        
            const startTime = performance.now();
        
            let wait = setInterval(() => {

                const elapsedTime = performance.now() - startTime;
        
                if ((this.#currentScriptsPhase2 === this.#requiredScriptsPhase2 && this.#currentScriptsPhase2 !== 0) || elapsedTime >= timeLimit) {

                    if(this.debugMode){

                        console.log("VNE: Required Scripts: " + this.#requiredScriptsPhase2);
                        console.log("VNE: Current Scripts: " + this.#currentScriptsPhase2);

                        if (elapsedTime >= timeLimit) {

                            console.log("VNE: Judgement: FAILED..");

                        }
                        else{

                            console.log("VNE: Judgement: SUCCESSFUL!");

                        }

                    }

                    clearInterval(wait);
                    if (elapsedTime >= timeLimit) {
                        resolve(true);
                    }
                    resolve(false);
                }

            }, 100);

        });

    }

    async startPhase3() {

        if(this.debugMode) console.log("VNE: Initialization Phase 3:");

        return new Promise((resolve) => {
            const averageLoadingTime = 5000; // Average loading time in milliseconds
            const timeLimit = averageLoadingTime * 1.5; // Adjust the time limit dynamically (150% of average loading time)

            this.addVNScript(3, "Scripts/Game/Events.js", true);
            this.addVNScript(3, "Scripts/Game/Game.js", true);
        
            const startTime = performance.now();
        
            let wait = setInterval(() => {

                const elapsedTime = performance.now() - startTime;
        
                if ((this.#currentScriptsPhase3 === this.#requiredScriptsPhase3 && this.#currentScriptsPhase3 !== 0) || elapsedTime >= timeLimit) {

                    if(this.debugMode){

                        console.log("VNE: Required Scripts: " + this.#requiredScriptsPhase3);
                        console.log("VNE: Current Scripts: " + this.#currentScriptsPhase3);

                        if (elapsedTime >= timeLimit) {

                            console.log("VNE: Judgement: FAILED..");

                        }
                        else{

                            console.log("VNE: Judgement: SUCCESSFUL!");

                        }

                    }

                    clearInterval(wait);
                    if (elapsedTime >= timeLimit) {
                        resolve(true);
                    }
                    resolve(false);
                }

            }, 100);

        });

    }

    async initialize(){

        //Phase 1
        if(await this.startPhase1()){

            this.throwSystemError("ERROR: 401");
            return;

        }

        //Phase 2
        if(await this.startPhase2()){

            this.throwSystemError("ERROR: 402");
            return;

        }

        //Phase 3
        if(await this.startPhase3()){

            this.throwSystemError("ERROR: 403");
            return;

        }
        
        //Phase 4
        this.#setup();

    }

}



  

