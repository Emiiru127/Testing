import { visualNovelEngine } from "../VNInitialScript.js";

    let gameState = document.createElement("div");    
    let container = document.createElement("div");

    gameState.id = "gameState";

    container.className = "stateContent";

    gameState.appendChild(container);

    let stateManager = visualNovelEngine.getHandler().getStateManager()
    stateManager.addState("gameState", gameState, false);
    visualNovelEngine.attachScriptPhase1();
    
