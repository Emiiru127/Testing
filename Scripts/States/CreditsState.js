import { visualNovelEngine } from "../VNInitialScript.js";

    let creditsState = document.createElement("div");
    let container = document.createElement("div");
    let title = document.createElement("h1");
    let btnBack = document.createElement("button");
    let creditsHolder = document.createElement("div");
    let credits = document.createElement("h1");

    creditsState.id = "creditsState";

    container.className = "stateContent";

    title.id = "creditsTitle";
    title.innerHTML = "Credits";

    btnBack.id = "creditsBack";
    btnBack.className = "gameButton";
    btnBack.type = "button";
    btnBack.innerHTML = "Back";

    creditsHolder.id = "creditsHolder";

    credits.id = "credits";
    credits.innerHTML = "Visual Novel Engine by:" + 
                        "<br>" +
                        "Emiiru" +
                        "<br><br><br>" +
                        "Script Writer:" +
                        "<br>" +
                        "???" +
                        "<br><br><br>" +
                        "Graphics Designer:" +
                        "<br>" +
                        "???" +
                        "<br><br><br>" +
                        "Programmed by:" +
                        "<br>" +
                        "???";

    creditsHolder.appendChild(credits);

    container.appendChild(title);
    container.appendChild(document.createElement("br"));
    container.appendChild(btnBack);
    container.appendChild(creditsHolder);

    creditsState.appendChild(container);

    let stateManager = visualNovelEngine.getHandler().getStateManager()
    stateManager.addState("creditsState", creditsState, false);
    stateManager.addStateButton("creditsState", "creditsBackBtn", btnBack);
    visualNovelEngine.attachScriptPhase1();

