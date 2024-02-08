import { visualNovelEngine } from "../VNInitialScript.js";

    let hudMenuBtn = document.createElement("button");
    hudMenuBtn.className = "hudMenuBtn";
    hudMenuBtn.id = "hudMenuBtn";
    hudMenuBtn.innerHTML = "Menu";

    let uiManager = visualNovelEngine.getHandler().getUIManager();
    uiManager.addUI("headsUpDisplayMenuBtn", hudMenuBtn);

    visualNovelEngine.attachScriptPhase2();

