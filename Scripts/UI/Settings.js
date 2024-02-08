import { visualNovelEngine } from "../VNInitialScript.js";

let settingsUI = document.createElement("div");
settingsUI.id = "settingsUI";

let settingsUIContainer = document.createElement("div");
settingsUIContainer.id = "settingsUIContainer";

let settingsUITitle = document.createElement("h1");
settingsUITitle.id = "settingsUITitle";
settingsUITitle.innerHTML = "Settings";

let settingsUIBackBtn = document.createElement("button");
settingsUIBackBtn.id = "settingsUIBackBtn";
settingsUIBackBtn.className = "settingsUIBtn";
settingsUIBackBtn.type = "button";
settingsUIBackBtn.innerHTML = "X";

let table = document.createElement("table");
table.id = "settingsUITable";

let headers = [];
headers.length = 4;

headers[0] = createTableHeader("settingsUIColumn1", "Volume");
headers[1] = createTableHeader("settingsUIColumn2", "");
headers[2] = createTableHeader("settingsUIColumn3", "");
headers[3] = createTableHeader("settingsUIColumn4", "Mute");

let tableDataRow1 = [];
tableDataRow1.length = 3;

tableDataRow1[0] = createTableDataCell("settingsUIColumn1", ["label", null, null, "Master Volume"]);
tableDataRow1[1] = createTableDataCell("settingsUIColumn2", ["span", null, "settingsUIMasterVolume", "50"]);
tableDataRow1[2] = createTableDataCell("settingsUIColumn3", ["input", "settingsUIVolumeSlider", "settingsUIMasterVolumeSlider", null, "range", "0", "100", "50"]);

let tableDataRow2 = [];
tableDataRow2.length = 4;

tableDataRow2[0] = createTableDataCell("settingsUIColumn1", ["label", null, null, "Music Volume"]);
tableDataRow2[1] = createTableDataCell("settingsUIColumn2", ["span", null, "settingsUIMusicrVolume", "50"]);
tableDataRow2[2] = createTableDataCell("settingsUIColumn3", ["input", "settingsUIVolumeSlider", "settingsUIMusicVolumeSlider", null, "range", "0", "100", "50"]);
tableDataRow2[3] = createTableDataCell("settingsUIColumn4", ["input", "settingsUIMuteBox", "settingsUIMusicVolumeMuteBox", null, "checkbox"]);

let tableDataRow3 = [];
tableDataRow3.length = 4;

tableDataRow3[0] = createTableDataCell("settingsUIColumn1", ["label", null, null, "Sound Effects Volume"]);
tableDataRow3[1] = createTableDataCell("settingsUIColumn2", ["span", null, "settingsUISoundEffectsVolume", "50"]);
tableDataRow3[2] = createTableDataCell("settingsUIColumn3", ["input", "settingsUIVolumeSlider", "settingsUISoundEffectsVolumeSlider", null, "range", "0", "100", "75"]);
tableDataRow3[3] = createTableDataCell("settingsUIColumn4", ["input", "settingsUIMuteBox", "settingsUISoundEffectsVolumeMuteBox", null, "checkbox"]);

let tableDataRow4 = [];
tableDataRow4.length = 4;

tableDataRow4[0] = createTableDataCell("settingsUIColumn1", ["label", null, null, "Character Voice Volume"]);
tableDataRow4[1] = createTableDataCell("settingsUIColumn2", ["span", null, "settingsUICharacterVoiceVolume", "50"]);
tableDataRow4[2] = createTableDataCell("settingsUIColumn3", ["input", "settingsUIVolumeSlider", "settingsUICharacterVoiceVolumeSlider", null, "range", "0", "100", "75"]);
tableDataRow4[3] = createTableDataCell("settingsUIColumn4", ["input", "settingsUIMuteBox", "settingsUICharacterVoiceVolumeMuteBox", null, "checkbox"]);


function createTableRow(contents){

    let tableRow = document.createElement("tr");

    for(let i = 0; i < contents.length; i++){

        tableRow.appendChild(contents[i]);

    }

    return tableRow;

}

function createTableHeader(className, text){

    let tableHeader = document.createElement("th");

    tableHeader.className = className;
    tableHeader.innerHTML = text;

    return tableHeader;

}

function createTableDataCell(className, contents){

    let tableDataCell = document.createElement("td");
    tableDataCell.className = className;

    let element;

    for(let i = 0; i < contents.length; i++){

        switch(i){

            case(0):

            if(contents[i] == null){

                continue;

            }
            
            element = document.createElement(contents[i]);

            break;

            case(1):

            if(contents[i] == null){

                continue;

            }
            
            element.className = contents[i];

            break;

            case(2):

            if(contents[i] == null){

                continue;

            }

            element.id = contents[i];

            break;

            case(3):

            if(contents[i] == null){

                continue;

            }

            element.innerHTML = contents[i];

            break;

            case(4):

            if(contents[i] == null){

                continue;

            }

            element.type = contents[i];

            break;

            case(5):

            if(contents[i] == null){

                continue;

            }

            element.min = contents[i];

            break;

            case(6):

            if(contents[i] == null){

                continue;

            }

            element.max = contents[i];

            break;

            case(7):

            if(contents[i] == null){

                continue;

            }

            element.value = contents[i];

            break;

        }

    }

    tableDataCell.appendChild(element);

    return tableDataCell;

}

table.appendChild(createTableRow(headers));
table.appendChild(createTableRow(tableDataRow1));
table.appendChild(createTableRow(tableDataRow2));
table.appendChild(createTableRow(tableDataRow3));
table.appendChild(createTableRow(tableDataRow4));

settingsUIContainer.appendChild(settingsUITitle);
settingsUIContainer.appendChild(settingsUIBackBtn);
settingsUIContainer.appendChild(document.createElement("br"));
settingsUIContainer.appendChild(document.createElement("br"));
settingsUIContainer.appendChild(table);
settingsUIContainer.appendChild(document.createElement("br"));

settingsUI.appendChild(settingsUIContainer);

let uiManager = visualNovelEngine.getHandler().getUIManager();
uiManager.addUI("settingsUI", settingsUI);
uiManager.addUI("settingsUIBackBtn", settingsUIBackBtn);

visualNovelEngine.attachScriptPhase2();
