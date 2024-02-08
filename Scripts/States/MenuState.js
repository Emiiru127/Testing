import { visualNovelEngine } from "../VNInitialScript.js";

    let menuState = document.createElement("div");
    let container = document.createElement("div");
    let title = document.createElement("h1");
    let btnStart = document.createElement("button");
    let btnSettings = document.createElement("button");
    let btnCredits = document.createElement("button");

    menuState.id = "menuState";

    container.className = "stateContent";

    title.id = "menuTitle";
    title.innerHTML = "Visual Novel Project";

    btnStart.id = "menuStart";
    btnStart.innerHTML = "Start";
    btnStart.className = "gameButton";
    btnStart.type = "button";

    btnSettings.id = "menuSettings";
    btnSettings.innerHTML = "Settings";
    btnSettings.className = "gameButton";
    btnSettings.type = "button";

    btnCredits.id = "menuCredits";
    btnCredits.innerHTML = "Credits";
    btnCredits.className = "gameButton";
    btnCredits.type = "button";

    container.appendChild(title);
    container.appendChild(document.createElement("br"));
    container.appendChild(btnStart);
    container.appendChild(document.createElement("br"));
    container.appendChild(btnSettings);
    container.appendChild(document.createElement("br"));
    container.appendChild(btnCredits);

    menuState.appendChild(container);

    let stateManager = visualNovelEngine.getHandler().getStateManager()
    stateManager.addState("menuState", menuState, false);
    stateManager.addStateButton("menuState", "menuStartBtn", btnStart);
    stateManager.addStateButton("menuState", "menuSettingsBtn", btnSettings);
    stateManager.addStateButton("menuState", "menuCreditsBtn", btnCredits);

    visualNovelEngine.attachScriptPhase1();

