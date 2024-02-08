import { visualNovelEngine } from "../VNInitialScript.js";

let menuUI = document.createElement("div");
menuUI.className = "UI";
menuUI.id = "menuUI";

let menuUIContainer = document.createElement("div");
menuUIContainer.className = "UI";
menuUIContainer.id = "menuUIContainer";

let menuUITable = document.createElement("table");
menuUITable.className = "UITable";
menuUITable.id = "menuUITable";

let tableRow1 = document.createElement("tr");
tableRow1.className = "menuUItr"
let tableRow2 = document.createElement("tr");
tableRow2.className = "menuUItr"
let tableRow3 = document.createElement("tr");
tableRow3.className = "menuUItr"

let menuResumeBtn = document.createElement("button");
menuResumeBtn.innerHTML = "Resume";
menuResumeBtn.className = "menuUIButton";
menuResumeBtn.id = "menuResumeBtn";

let menuSettingsBtn = document.createElement("button");
menuSettingsBtn.innerHTML = "Settings";
menuSettingsBtn.className = "menuUIButton";
menuSettingsBtn.id = "menuSettingsBtn";

let menuMainMenuBtn = document.createElement("button");
menuMainMenuBtn.innerHTML = "Main Menu";
menuMainMenuBtn.className = "menuUIButton";
menuMainMenuBtn.id = "menuMainMenuBtn";

tableRow1.appendChild(menuResumeBtn);
tableRow2.appendChild(menuSettingsBtn);
tableRow3.appendChild(menuMainMenuBtn);

menuUITable.appendChild(tableRow1);
menuUITable.appendChild(tableRow2);
menuUITable.appendChild(tableRow3);

menuUIContainer.appendChild(menuUITable);

menuUI.appendChild(menuUIContainer);

let uiManager = visualNovelEngine.getHandler().getUIManager();
uiManager.addUI("menuUI", menuUI);
uiManager.addUI("menuResumeBtn", menuResumeBtn);
uiManager.addUI("menuSettingsBtn", menuSettingsBtn);
uiManager.addUI("menuMainMenuBtn", menuMainMenuBtn);

visualNovelEngine.attachScriptPhase2();



