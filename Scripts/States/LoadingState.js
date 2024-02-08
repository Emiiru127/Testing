import { visualNovelEngine } from "../VNInitialScript.js";
    
    let loadingState = document.createElement("div");    
    let background = document.createElement("div");
    let title = document.createElement("h1");

    background.id = "loadingState";
    title.id = "loadingTitle";

    title.innerHTML = "Loading";

    background.appendChild(title);

    loadingState.appendChild(background);

    let stateManager = visualNovelEngine.getHandler().getStateManager()
    stateManager.addState("loadingState", loadingState, true);
    visualNovelEngine.attachScriptPhase1();





